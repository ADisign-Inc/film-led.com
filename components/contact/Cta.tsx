import Link from "next/link";
import Image from "next/image";

export function Cta() {
  return (
    <section className="container max-w-6xl md:py-20">
      <div className="bg-white/20 px-5 xs:px-10 py-16">
        <h2>
          Contact
          <span>お問い合わせ・お申し込み</span>
        </h2>
        <p className="text-center mb-8 md:mb-16">
          革新的な透過フィルムデジタルサイネージで、あなたのビジネスの集客力を最大化しませんか？
          <br />
          まずは無料相談からお気軽にお問い合わせください。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
          <a
            className="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition hover:bg-yellow-100"
            href="https://adisign.net/contact_form.html"
            target="_blank"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between gap-x-3">
                <div className="grow">
                  <div className="flex justify-center items-center gap-x-5">
                    <Image
                      src="/images/icons/mail.svg"
                      alt="メールでお問合せ"
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-16 md:h-16"
                      priority
                    />
                    <div className="grow group-hover:text-gray-900 text-black space-y-2">
                      <p>メールでお問合せ</p>
                      <p className="text-xl md:text-2xl font-semibold">
                        お問合せフォームへ
                      </p>
                      <p>内容確認後、迅速にご返信いたします</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition hover:bg-yellow-100"
            href="tel:092-433-3302"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center gap-x-3">
                <div className="grow">
                  <div className="flex justify-center items-center gap-x-5">
                    <Image
                      src="/images/icons/phone.svg"
                      alt="お電話でのお問い合わせ"
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-16 md:h-16"
                      priority
                    />
                    <div className="grow group-hover:text-gray-900 text-black space-y-2">
                      <p>お電話でのお問い合わせ</p>
                      <p className="text-2xl md:text-3xl font-semibold">
                        092-433-3302
                      </p>
                      <p>受付時間：平日10時〜18時</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
