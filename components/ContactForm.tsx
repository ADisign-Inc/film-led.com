"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./Button";

// フォームスキーマ
const contactFormSchema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
  type: z.enum(["general", "product", "support", "other"]).optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "エラーが発生しました");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("ネットワークエラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            お問い合わせを受け付けました
          </h3>
          <p className="text-green-700 mb-6">
            ご入力いただいた内容を確認の上、担当者よりご連絡いたします。
          </p>
          <Button variant="default" onClick={() => setSubmitStatus("idle")}>
            新しいお問い合わせ
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* お名前 */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.name ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="山田 太郎"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* メールアドレス */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 会社名 */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              会社名
            </label>
            <input
              {...register("company")}
              type="text"
              id="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="株式会社サンプル"
            />
          </div>

          {/* 電話番号 */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              電話番号
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="03-1234-5678"
            />
          </div>
        </div>

        {/* お問い合わせ種別 */}
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            お問い合わせ種別
          </label>
          <select
            {...register("type")}
            id="type"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">選択してください</option>
            <option value="general">一般的なお問い合わせ</option>
            <option value="product">製品について</option>
            <option value="support">サポート</option>
            <option value="other">その他</option>
          </select>
        </div>

        {/* メッセージ */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.message ? "border-red-300" : "border-gray-300"
            }`}
            placeholder="お問い合わせ内容を詳しくお聞かせください"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* 送信ボタン */}
        <div className="text-center">
          <Button
            type="submit"
            variant="default"
            disabled={isSubmitting}
            className="min-w-[200px]"
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </Button>
        </div>
      </form>
    </div>
  );
}
