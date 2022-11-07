"use client";

import {
  QrCodeIcon,
  UserPlusIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  AdjustmentsVerticalIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <main className="container m-auto max-w-6xl p-5 text-gray-800">
        <section
          id="#home"
          className="grid grid-cols-1 gap-10 px-5 md:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="md:self-center"
          >
            <h1 className="mb-5 text-4xl font-bold md:text-5xl">
              Lorem <span className="text-blue-600">ipsum dolor sit amet</span>{" "}
              consectetur adipisicing elit.
            </h1>
            <h2 className="mb-10 text-xl md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
              nisi.
            </h2>
            <div className="grid max-w-md grid-cols-1 gap-3 lg:grid-cols-2">
              <Link
                className="align-content-center w-full rounded-lg bg-blue-600 py-3 text-center text-sm text-white"
                href="/signup"
              >
                Sign Up Now
              </Link>
              <caption className="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </caption>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
            className="m-auto"
          >
            <Image
              src="/hero-cards.png"
              alt="Digital Business Cards"
              width={350}
              height={500}
              className="justify-self-center md:self-center"
            />
          </motion.div>
        </section>
        <section className="my-36 grid grid-cols-1 gap-10 rounded-lg bg-gray-100 p-5 text-sm text-gray-500 shadow-xl md:grid-cols-2 md:text-base lg:grid-cols-4 lg:py-10">
          <div className="flex items-center">
            <QrCodeIcon className="mr-4 w-16" />
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="flex items-center">
            <UserPlusIcon className="mr-4 w-16" />
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="flex items-center">
            <RectangleStackIcon className="mr-4 w-16" />
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="flex items-center">
            <Squares2X2Icon className="mr-4 w-16" />
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </section>
        <section className="my-36 grid grid-cols-1 gap-10 px-5 md:grid-cols-2">
          <Image
            src="/traditional-card.png"
            alt="Traditional Business Card"
            width={376}
            height={205}
            className="justify-self-center"
          />
          <div>
            <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="opacity-80 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore excepturi nam exercitationem tempore aspernatur vero
              velit ex numquam similique pariatur.
            </p>
          </div>
        </section>
        <section
          id="beneficios"
          className="mt-36 grid grid-cols-1 overflow-hidden rounded-lg bg-blue-600 text-white md:grid-cols-2 md:px-10"
        >
          <div className="p-5 py-10 lg:py-20">
            <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="opacity-80 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore excepturi nam exercitationem tempore aspernatur vero
              velit ex numquam similique pariatur.
            </p>
          </div>
          <Image
            src="/higlight-banner-card.png"
            alt="Digital Business Card Higlight"
            width={400}
            height={321}
            className="self-end justify-self-center px-5"
          />
        </section>
        <section className="my-10 grid grid-cols-1 gap-10 px-5 lg:grid-cols-3">
          <div className="grid grid-rows-2 rounded-lg bg-gray-100 p-5 shadow-lg">
            <AdjustmentsVerticalIcon className="mr-4 w-10 self-end text-blue-600" />
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ipsam amet magnam recusandae dolorum? Recusandae!
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 rounded-lg bg-gray-100 p-5 shadow-lg">
            <ArrowTopRightOnSquareIcon className="mr-4 w-10 self-end text-blue-600" />
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ipsam amet magnam recusandae dolorum? Recusandae!
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 rounded-lg bg-gray-100 p-5 shadow-lg">
            <AdjustmentsVerticalIcon className="mr-4 w-10 self-end text-blue-600" />
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ipsam amet magnam recusandae dolorum? Recusandae!
              </p>
            </div>
          </div>
        </section>
        <section className="my-36 space-y-28 px-5">
          <div className="md:grid-cols-reverse grid grid-cols-1 gap-5 md:grid-cols-2">
            <Image
              src="/card-feature-1.png"
              alt="Digital Business Card Feature 1"
              width={358}
              height={429}
              className="self-end justify-self-center px-5 md:self-center"
            />
            <div className="px-5">
              <h3 className="mb-5 text-2xl font-semibold md:text-3xl">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="mb-5 opacity-80 md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore excepturi nam exercitationem tempore aspernatur vero
                velit ex numquam similique pariatur.
              </p>
              <ul className="list-inside list-disc md:text-lg">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="md:grid-cols-reverse grid grid-cols-1 gap-5 md:grid-cols-2">
            <Image
              src="/card-feature-2.png"
              alt="Digital Business Card Feature 1"
              width={358}
              height={429}
              className="self-end justify-self-center px-5 md:self-center"
            />
            <div className="px-5">
              <h3 className="mb-5 text-2xl font-semibold md:text-3xl">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="mb-5 opacity-80 md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore excepturi nam exercitationem tempore aspernatur vero
                velit ex numquam similique pariatur.
              </p>
              <ul className="list-inside list-disc md:text-lg">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="md:grid-cols-reverse grid grid-cols-1 gap-5 md:grid-cols-2">
            <Image
              src="/card-feature-3.png"
              alt="Digital Business Card Feature 1"
              width={358}
              height={429}
              className="self-end justify-self-center px-5 md:self-center"
            />
            <div className="px-5">
              <h3 className="mb-5 text-2xl font-semibold md:text-3xl">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="mb-5 opacity-80 md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore excepturi nam exercitationem tempore aspernatur vero
                velit ex numquam similique pariatur.
              </p>
              <ul className="list-inside list-disc md:text-lg">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="my-36 grid grid-cols-1 rounded-lg bg-blue-600 text-white md:grid-cols-2 md:px-10">
          <div className="lg:py-18 p-5 py-10">
            <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="mb-5 opacity-80 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore excepturi nam exercitationem tempore aspernatur vero
              velit ex numquam similique pariatur.
            </p>
            <Link
              className="inline-block w-full rounded-lg bg-white px-6 py-3 text-center text-sm text-black lg:w-fit"
              href="/signup"
            >
              Sign Up Now
            </Link>
          </div>
          <Image
            src="/cards-highlight-2.png"
            alt="Digital Business Card Higlight"
            width={400}
            height={321}
            className="self-end justify-self-center px-5"
          />
        </section>
      </main>
      <footer className="rounded-t-xl bg-black px-5 py-10 text-white">
        <div className="container m-auto grid max-w-6xl grid-cols-1 gap-10 px-5 md:grid-cols-3">
          <div>
            <h6 className="text-lg font-bold">Lorem ipsum dolor sit.</h6>
            <ul className="opacity-80">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-bold">Lorem ipsum dolor sit.</h6>
            <ul className="opacity-80">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-bold">Lorem ipsum dolor sit.</h6>
            <ul className="opacity-80">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <i> &copy; Copyright Inteminer 2022 All Rights Reserved</i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
