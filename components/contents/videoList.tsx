"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

import { videoList } from "../../data/video";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function VideoList() {
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const getVideoSrc = (videoId: string, isHovered: boolean = false) => {
    const baseParams =
      "mute=1&loop=1&playlist=" +
      videoId +
      "&enablejsapi=1&playsinline=1&modestbranding=1&showinfo=0&controls=0&rel=0&iv_load_policy=3&origin=https://film-led.com&widget_referrer=https://film-led.com&preload=auto&loading=0";
    return `https://www.youtube.com/embed/${videoId}?${baseParams}${
      isHovered ? "&autoplay=1" : ""
    }`;
  };

  useEffect(() => {
    // YouTube APIの読み込み
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const newPlayers = videoRefs.current.map((iframe, index) => {
        if (iframe) {
          return new window.YT.Player(iframe, {
            events: {
              onReady: (event: any) => {
                event.target.mute();
              },
            },
          });
        }
        return null;
      });
    };

    return () => {
      videoRefs.current.forEach((_, index) => {
        const container = document.getElementById(`video-container-${index}`);
        if (container) {
          container.removeEventListener("mouseenter", () =>
            handleMouseEnter(index)
          );
          container.removeEventListener("mouseleave", () =>
            handleMouseLeave(index)
          );
        }
      });
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredVideo(index);
  };

  const handleMouseLeave = (index: number) => {
    setHoveredVideo(null);
  };

  useEffect(() => {
    videoRefs.current.forEach((_, index) => {
      const container = document.getElementById(`video-container-${index}`);
      if (container) {
        container.addEventListener("mouseenter", () => handleMouseEnter(index));
        container.addEventListener("mouseleave", () => handleMouseLeave(index));
      }
    });

    return () => {
      videoRefs.current.forEach((_, index) => {
        const container = document.getElementById(`video-container-${index}`);
        if (container) {
          container.removeEventListener("mouseenter", () =>
            handleMouseEnter(index)
          );
          container.removeEventListener("mouseleave", () =>
            handleMouseLeave(index)
          );
        }
      });
    };
  }, []);

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-x-3 sm:gap-y-10">
      {videoList.map((video, index) => (
        <div key={video.id}>
          <div
            key={video.id}
            id={`video-container-${index}`}
            className="group cursor-pointer relative w-full aspect-video mb-5"
            onClick={() => handleVideoClick(video.id)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="absolute inset-0 z-10"></div>
            {hoveredVideo === index ? (
              <iframe
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                width="100%"
                height="100%"
                src={getVideoSrc(video.id, true)}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="eager"
                className="absolute inset-0 w-full h-full"
                style={{ visibility: "visible" }}
              ></iframe>
            ) : !video.thumbnail ? (
              <iframe
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                width="100%"
                height="100%"
                src={getVideoSrc(video.id, false)}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="eager"
                className="absolute inset-0 w-full h-full"
                style={{ visibility: "visible" }}
              ></iframe>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 relative">
                    <div className="absolute inset-0 bg-[#ff0033] rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <iframe
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  width="100%"
                  height="100%"
                  src={getVideoSrc(video.id, false)}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="eager"
                  className="absolute inset-0 w-full h-full"
                  style={{ visibility: "hidden" }}
                ></iframe>
              </div>
            )}
          </div>

          <div>
            <p className="text-[0.9em]">{video.client} 様</p>

            <p className="text-[1.2em] font-bold mb-3">{video.title}</p>

            <div className="!text-xs">
              {/* 15文字以下のタグを1行目に */}
              <div className="flex flex-wrap mb-1">
                {video.tag
                  .filter((cat) => cat.length <= 15)
                  .map((cat, index) => (
                    <span
                      key={`short-${index}`}
                      className="border border-gray-300/30 text-yellow-300 !text-xs px-3 py-1.5 rounded mr-1.5 mb-1 text-nowrap"
                    >
                      {cat}
                    </span>
                  ))}
              </div>

              {/* 15文字超のタグを2行目に */}
              <div className="flex flex-wrap">
                {video.tag
                  .filter((cat) => cat.length > 15)
                  .map((cat, index) => (
                    <span
                      key={`long-${index}`}
                      className="border border-gray-300/30 text-yellow-300 !text-xs px-3 py-1.5 rounded mr-1.5 mb-1 text-nowrap"
                    >
                      {cat}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-4xl text-white hover:text-yellow-300 transition-colors"
            >
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&origin=https://film-led.com&widget_referrer=https://film-led.com`}
              title={videoList.find((v) => v.id === selectedVideo)?.title || ""}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
