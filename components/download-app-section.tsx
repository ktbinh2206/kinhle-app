"use client";

import { Download, Smartphone, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DownloadAppSection() {
  const handleDownloadApp = () => {
    const link = document.createElement("a");
    link.href = "/kinhle-app.apk";
    link.download = "KinhLe.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full pt-10 bg-linear-to-br from-[#6D2323]/5 via-[#E5D0AC]/10 to-[#FBA51C]/5">
      <div className="max-w-7xl mx-auto">
        <Card className="overflow-hidden border-[#E5D0AC] shadow-xl">
          <div className="space-y-6 flex p-4">
            <div className="space-y-2 flex-1">
              <h3 className="text-2xl font-bold text-[#6D2323] text-center">Kính Lễ</h3>
              <p className="text-muted-foreground">
                Tải ứng dụng Kính Lễ để truy cập văn khấn mọi lúc, mọi nơi
              </p>
            </div>
            {/* Download Button */}
            <div className="flex-1 text-center">
              <Button
                onClick={handleDownloadApp}
                className="w-full md:w-auto bg-[#A31D1D] hover:bg-[#6D2323] text-white px-8 py-6 text-lg font-bold cursor-pointer group"
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                TẢI ỨNG DỤNG NGAY
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                File APK cho Android • Kích thước: ~15MB
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
