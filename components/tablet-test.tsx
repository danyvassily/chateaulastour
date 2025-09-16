"use client"

import { useDeviceType } from "@/hooks/use-mobile"
import { Badge } from "@/components/ui/badge"

export function TabletTest() {
  const { isMobile, isTablet, isDesktop } = useDeviceType()

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-3 rounded-lg text-sm">
      <div className="space-y-1">
        <div>Largeur: {typeof window !== 'undefined' ? window.innerWidth : 'N/A'}px</div>
        <div className="flex gap-2">
          <Badge variant={isMobile ? "default" : "secondary"}>Mobile</Badge>
          <Badge variant={isTablet ? "default" : "secondary"}>Tablette</Badge>
          <Badge variant={isDesktop ? "default" : "secondary"}>Desktop</Badge>
        </div>
        <div className="text-xs opacity-75">
          Mobile: &lt; 640px | Tablette: 640-1023px | Desktop: ≥ 1024px
        </div>
      </div>
    </div>
  )
}