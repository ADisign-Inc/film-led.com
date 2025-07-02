import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    console.log("=== テストメール送信 ===");
    console.log(
      "RESEND_API_KEY:",
      process.env.RESEND_API_KEY ? "設定済み" : "未設定"
    );
    console.log("FROM_EMAIL:", process.env.FROM_EMAIL);
    console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

    // テストメール送信
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev", // Resendのデフォルトドメインを使用
      to: [process.env.ADMIN_EMAIL || "shiwa.adisign@gmail.com"],
      subject: "テストメール - film-led.com",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">テストメール</h2>
          <p>このメールは film-led.com のメール送信テストです。</p>
          <p>送信日時: ${new Date().toLocaleString("ja-JP")}</p>
        </div>
      `,
    });

    console.log("メール送信結果:", result);

    return NextResponse.json(
      {
        message: "テストメールを送信しました",
        result: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("=== テストメール送信エラー ===");
    console.error("Error details:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        message: "テストメール送信に失敗しました",
        error: errorMessage,
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}
