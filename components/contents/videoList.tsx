"use client";

import React, { useRef, useEffect, useState } from "react";

import { videoList } from "../../data/video";

export function VideoList() {
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseEnter = (index: number) => {
      const iframe = videoRefs.current[index];
      if (iframe) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "playVideo" }),
          "*"
        );
      }
    };

    const handleMouseLeave = (index: number) => {
      const iframe = videoRefs.current[index];
      if (iframe) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "stopVideo" }),
          "*"
        );
      }
    };

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
    videoRefs.current.forEach((iframe) => {
      if (iframe) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "stopVideo" }),
          "*"
        );
      }
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-3">
      {videoList.map((video, index) => (
        <div
          key={video.id}
          id={`video-container-${index}`}
          className="group cursor-pointer relative w-full aspect-video"
          onClick={() => handleVideoClick(video.id)}
        >
          <div className="absolute inset-0 z-10"></div>
          <iframe
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}?si=KWKlerJK-1HGb-Ai&mute=1&loop=1&playlist=${video.id}&enablejsapi=1&playsinline=1&modestbranding=1&showinfo=0&controls=0&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          ></iframe>
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
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=0&modestbranding=1&showinfo=0&rel=0`}
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
