import { Card, CardContent } from "@/app/components/ui/card";
import React from "react";

import { Barbershop } from "@prisma/client";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="relative w-full h-[159px]">
          <Image
            alt={barbershop.name}
            src={barbershop.imageUrl}
            fill
            style={{
              objectFit: "cover",
            }}
            className="rounded-2xl"
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button className="w-full mt-3" variant={"secondary"}>
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
