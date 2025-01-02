import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#2C2B2C] text-white">
      <div className="text-[#2C2B2C]">
        <Image
          src="/main.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={75}
          priority
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-5 py-24 text-center relative z-10">
        <h1 className="text-4xl font-bold text-[#D89F55] mb-8">Our Mission</h1>
        <p className="text-lg leading-relaxed mb-8">
          Our mission is to inspire and educate people about the beauty,
          symbolism, and importance of flowers in our daily lives. We strive to
          connect individuals with nature by sharing insightful content on
          different flower varieties, their meanings, and how they can enhance
          the environment. Our goal is to promote sustainability, mindfulness,
          and emotional well-being by encouraging people to embrace the beauty
          of flowers, whether in their gardens, homes, or as meaningful gifts.
          We are dedicated to creating a community that appreciates the
          transformative power of flowers in creating vibrant, welcoming spaces.
        </p>

        <h1 className="text-4xl font-bold text-[#D89F55] mb-8">Our Vision</h1>
        <p className="text-lg leading-relaxed">
          Our vision is to create a world where flowers are an integral part of
          every person&apos;s life, offering not just beauty but also peace and
          connection to nature. We aim to inspire people to appreciate the
          delicate and powerful role flowers play in the world, fostering a
          greater sense of mindfulness and environmental consciousness.
        </p>
      </div>
    </div>
  );
};

export default About;
