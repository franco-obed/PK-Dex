"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
  Link,
} from "@heroui/react";
import { useGetPokemonByIdQuery } from "@/lib/features/pokemon/pokemonApi";

export default function PokemonCard() {
  const { data } = useGetPokemonByIdQuery("900");
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={100}
          radius="lg"
          src={data?.sprites.front_default}
          width={100}
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <p className="text-md">No. {data?.id} </p>
            <p className="text-md text-transform: capitalize">{data?.name}</p>
          </div>
          <div className="flex flex-row gap-2">
            {data.types.map((ele) => (
              <Chip color="default" key={ele.slot}>
                <p className="text-transform: capitalize"> {ele.type.name} </p>
              </Chip>
            ))}
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {data?.abilities.length > 1 ? <p>Abilities:</p> : <p>Ability:</p>}

        <div className="flex flex-row gap-2 ">
          {data?.abilities.map((ele) => (
            <p key={ele.slot} className="text-md text-transform: capitalize">
              {ele.ability.name}
            </p>
          ))}
        </div>
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
