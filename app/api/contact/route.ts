import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// フォームデータのバリデーションスキーマ
const contactSchema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
  type: z.enum(["general", "product", "support", "other"]).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // バリデーション
    const validatedData = contactSchema.parse(body);

    // ここでメール送信処理を実装
    // 例: SendGrid, Resend, または他のメールサービスを使用
    await sendContactEmail(validatedData);

    return NextResponse.json(
      { message: "お問い合わせを受け付けました。ありがとうございます。" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "入力内容に誤りがあります",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        message:
          "サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。",
      },
      { status: 500 }
    );
  }
}

// メール送信処理
async function sendContactEmail(data: z.infer<typeof contactSchema>) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/send-email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("メール送信に失敗しました");
    }

    return await response.json();
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}
