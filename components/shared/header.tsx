import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div>
          <Image src="" alt="" />
        </div>
      </Container>
    </header>
  );
};
