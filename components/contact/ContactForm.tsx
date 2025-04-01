"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiry: string;
  privacyPolicy: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry: "",
    privacyPolicy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: フォーム送信処理の実装
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-900"
          >
            お名前
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
            placeholder="山田 太郎"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="company"
            className="text-sm font-medium text-gray-900"
          >
            会社名
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
            placeholder="株式会社〇〇"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-900"
        >
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-gray-900"
        >
          電話番号
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          placeholder="03-1234-5678"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="inquiry"
          className="text-sm font-medium text-gray-900"
        >
          お問い合わせ内容
        </label>
        <textarea
          id="inquiry"
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          rows={4}
          placeholder="お問い合わせ内容をご記入ください"
          required
        ></textarea>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            className="rounded border-gray-300"
            required
          />
          <span className="text-sm text-gray-700">
            <a href="#" className="text-blue-600 hover:underline">
              プライバシーポリシー
            </a>
            に同意します
          </span>
        </label>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          送信する
        </Button>
      </div>
    </form>
  );
} 