"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";
import { useGetPokemonByIdQuery } from "../../lib/features/pokemon/pokemonApi";

export default function PokemonCard() {
  const { data, isLoading } = useGetPokemonByIdQuery("1");
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={100}
          radius="sm"
          src={data?.sprites.front_default}
          width={100}
        />
        <div className="flex flex-col">
          <p className="text-md text-transform: capitalize">{data?.name}</p>
          <p className="text-small text-default-500">heroui.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/heroui-inc/heroui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
