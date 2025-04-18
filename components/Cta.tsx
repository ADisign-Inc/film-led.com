import Link from "next/link";
import Image from "next/image";
import { mainData } from "../data/main";
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
          <div className="group">
            <a
              className="flex flex-col bg-white border border-gray-200 rounded-xl hover:bg-transparent transition-all group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              href={mainData.contact.url}
              target="_blank"
            >
              <div className="p-4 md:p-5">
                <div className="flex justify-between gap-x-3">
                  <div className="grow">
                    <div className="flex justify-center items-center gap-x-5">
                      <div className="relative w-12 h-12 md:w-16 md:h-16">
                        <Image
                          src="/images/icons/mail_dark.svg"
                          alt="メールでお問合せ"
                          width={60}
                          height={60}
                          className="w-full h-full absolute transition-opacity duration-300 group-hover:opacity-0"
                          priority
                        />
                        <Image
                          src="/images/icons/mail-white.svg"
                          alt="メールでお問合せ"
                          width={60}
                          height={60}
                          className="w-full h-full absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          priority
                        />
                      </div>
                      <div className="grow  text-black space-y-2">
                        <p className="group-hover:text-white">
                          メールでお問合せ
                        </p>
                        <p className="text-xl md:text-2xl font-semibold group-hover:text-yellow-400 transition-all">
                          お問合せフォームへ
                        </p>
                        <p className="group-hover:text-white">
                          内容確認後、迅速にご返信いたします
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="group">
            <a
              className="flex flex-col bg-white border border-gray-200 rounded-xl hover:bg-transparent transition-all group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              href="tel:092-433-3302"
            >
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center gap-x-3">
                  <div className="grow">
                    <div className="flex justify-center items-center gap-x-5">
                      <div className="relative w-12 h-12 md:w-16 md:h-16">
                        <Image
                          src="/images/icons/phone_dark.svg"
                          alt="お電話でのお問い合わせ"
                          width={60}
                          height={60}
                          className="w-full h-full absolute transition-opacity duration-300 group-hover:opacity-0"
                          priority
                        />
                        <Image
                          src="/images/icons/phone-white.svg"
                          alt="お電話でのお問い合わせ"
                          width={60}
                          height={60}
                          className="w-full h-full absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          priority
                        />
                      </div>
                      <div className="grow text-black space-y-2">
                        <p className="group-hover:text-white">
                          お電話でのお問い合わせ
                        </p>
                        <p className="text-xl md:text-2xl font-semibold group-hover:text-yellow-400 transition-all">
                          092-433-3302
                        </p>
                        <p className="group-hover:text-white">
                          受付時間：平日10時〜18時
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
