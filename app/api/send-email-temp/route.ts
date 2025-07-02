import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, type } = body;

    // デバッグ情報をログに出力
    console.log("=== 一時的メール送信デバッグ情報 ===");
    console.log("フォームデータ:", {
      name,
      email,
      company,
      phone,
      message,
      type,
    });

    // お問い合わせ種別の日本語変換
    const typeLabels = {
      general: "一般的なお問い合わせ",
      product: "製品について",
      support: "サポート",
      other: "その他",
    };

    const typeLabel = typeLabels[type as keyof typeof typeLabels] || "未選択";

    // 管理者向けメール送信（お問い合わせ内容）
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.ADMIN_EMAIL || "shiwa.adisign@gmail.com"],
      subject: `お問い合わせ: ${name}様より`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            新しいお問い合わせ
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">お客様情報</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>会社名:</strong> ${company || "未入力"}</p>
            <p><strong>電話番号:</strong> ${phone || "未入力"}</p>
            <p><strong>お問い合わせ種別:</strong> ${typeLabel}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #007bff; margin-top: 0;">お問い合わせ内容</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
            <p>このメールは film-led.com のお問い合わせフォームから送信されました。</p>
            <p>送信日時: ${new Date().toLocaleString("ja-JP")}</p>
          </div>
        </div>
      `,
    });

    // 管理者向けメール送信（お客様向け自動返信の内容）
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.ADMIN_EMAIL || "shiwa.adisign@gmail.com"],
      subject: `[自動返信内容] お問い合わせを受け付けました - ${name}様向け`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            お客様向け自動返信メール（送信先: ${email}）
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6;">
            ${name} 様
          </p>
          
          <p style="font-size: 16px; line-height: 1.6;">
            この度は、film-led.comにお問い合わせいただき、ありがとうございます。<br>
            お問い合わせ内容を確認の上、担当者よりご連絡いたします。
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">お問い合わせ内容</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <p style="font-size: 14px; color: #6c757d;">
            なお、このメールは自動送信されています。<br>
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
            <p>送信日時: ${new Date().toLocaleString("ja-JP")}</p>
            <p>film-led.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        message: "メールを送信しました（管理者宛に両方のメールを送信）",
        note: "ドメイン認証完了後、お客様にも直接送信されます",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("=== メール送信エラー ===");
    console.error("Error details:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        message: "メール送信に失敗しました",
        error: errorMessage,
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}
