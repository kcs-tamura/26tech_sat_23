// src/components/SafeImg.tsx

import { useState } from "react";

interface Props {
  src: string | null;
  alt: string;
  className?: string;
  fallback: string;
}

export default function SafeImg
    ({ src, alt, className, fallback }: Props) {
  // 読み込み処理.
  const [failed, setFailed] = useState(false);

  // srcがnullまたは読み込みに失敗したらフォールバックを表示する.
  if (!src || failed) return <span>{fallback}</span>;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
