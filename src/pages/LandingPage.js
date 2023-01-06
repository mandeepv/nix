import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import Features from "components/features/ThreeColSimple.js";
import shopIconImageSrc from "images/shop-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import chefIconImageSrc from "images/chef-icon.svg";  


export default () => {
    const Subheading = tw.span`tracking-wider text-sm font-medium`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
    const Description = tw.span`inline-block mt-8`;
    const imageCss = tw`rounded-4xl`;
    
    const defaultSteps = [
      {
        heading: "Register",
        description: "Create an account with us using your email ID."
      },
      {
        heading: "Input Details",
        description: "Input various details asked by us abour your business."
      },
      {
        heading: "Select Influencer Package",
        description: "Choose a package that suits your needs."
      },
      {
          heading: "Watch NIX make you go viral",
          description: "Once you have selected a package, we will take care of the rest."
      }
  
      ];
  
  
    return (
      <AnimationRevealPage>
        <Hero
          heading={<>Your Brand in the <HighlightedText>Right Places.</HighlightedText></>}
          description="Why just go with one or two influencers when you can go with the many more? Amplify your brand's reach with NIX."
          imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
          imageCss={imageCss}
          imageDecoratorBlob={true}
          primaryButtonText=" SIGN UP NOW"
        />
      <FeatureWithSteps
          subheading={<Subheading>STEPS</Subheading>}
          heading={
            <>
              Easy to <HighlightedText>Get Started. </HighlightedText>
            </>
          }
          steps={defaultSteps}
          textOnLeft={false}
          imageSrc={macHeroScreenshotImageSrc}
          imageDecoratorBlob={true}
          decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        />
         
      <Features
          heading={
            <>
              Amazing <HighlightedText>Services.</HighlightedText>
            </>
          }
          cards={[
            {
              imageSrc: shopIconImageSrc,
              title: "Highly Targeted Ads",
              description: "Lorem ipsum donor amet siti ceali placeholder text",
              url: "https://google.com"
            },
            {
              imageSrc: chefIconImageSrc,
              title: "Micro Influencers over Celebrities",
              description: "Lorem ipsum donor amet siti ceali placeholder text",
              url: "https://timerse.com"
            },
            {
              imageSrc: celebrationIconImageSrc,
              title: "Instant Results",
              description: "Lorem ipsum donor amet siti ceali placeholder text",
              url: "https://reddit.com"
            }
          ]}
  
          imageContainerCss={tw`p-2!`}
          imageCss={tw`w-20! h-20!`}
        />
      </AnimationRevealPage>
      );
  };