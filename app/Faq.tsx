"use client";

import {
  Accordion,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
} from "@mantine/core";
import { FAQData } from "./_lib/data";
import Image from "next/image";

const PRIMARY_COL_HEIGHT = "500px";

export const FAQ = () => {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <div className="pt-20 px-20 bg-white py-12">
      <div className="max-w-[55%] mx-auto">
        <div className="text-center">
          <h2 className="font-garamond font-medium text-5xl text-darkout">
            Common Kuestions
          </h2>
          <p className="font-sans text-espresso mt-3">
            Everything you need to know about our handmade process, materials
            and caring for your pieces.
          </p>
        </div>
        <Container className="mt-20">
          <Accordion variant="separated">
            {FAQData.map((faq) => (
              <Accordion.Item
                styles={{ item: { backgroundColor: "#FFF1EB" } }}
                key={faq.id}
                value={faq.value}
              >
                <Accordion.Control>{faq.question}</Accordion.Control>
                <Accordion.Panel>{faq.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </div>
      <Container className="mt-40">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <div className="relative" style={{ height: PRIMARY_COL_HEIGHT }}>
            <Image
              src="/yarns.png"
              fill
              alt="yarns"
              className="object-cover rounded-4xl"
            />
          </div>
          <Grid>
            <Grid.Col span={12}>
              <div
                className="relative"
                style={{ height: SECONDARY_COL_HEIGHT }}
              >
                <Image
                  src="/hand-crochet.png"
                  fill
                  alt="yarns"
                  className="object-cover rounded-4xl"
                />
              </div>
            </Grid.Col>
            <Grid.Col span={6}>
              <div
                className="relative"
                style={{ height: SECONDARY_COL_HEIGHT }}
              >
                <Image
                  src="/crochet-hat-on-woman.png"
                  fill
                  alt="yarns"
                  className="object-cover rounded-4xl"
                />
              </div>
            </Grid.Col>
            <Grid.Col span={6}>
              <div
                className="relative"
                style={{ height: SECONDARY_COL_HEIGHT }}
              >
                <Image
                  src="/hung-crochet-bag.png"
                  fill
                  alt="yarns"
                  className="object-cover rounded-4xl"
                />
              </div>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </div>
  );
};
