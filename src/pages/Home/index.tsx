import { lazy } from "react";
import { useTranslation } from "react-i18next";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const LanguageSlider = lazy(() => import("../../components/LanguageSlider/LanguageSlider"));

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={t('intro.title')}
        content={t('intro.text')}
        button={t('intro.button')}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={t('middleBlock.title')}
        content={t('middleBlock.text')}
        button={t('middleBlock.button')}
      />
      <LanguageSlider 
        title={t('languages.title')}
        languages={t('languages.list', { returnObjects: true })}
      />

      <ContentBlock
        direction="right"
        title={t('mission.title')}
        content={t('mission.text')}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={t('product.title')}
        content={t('product.text')}
        icon="waving.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;