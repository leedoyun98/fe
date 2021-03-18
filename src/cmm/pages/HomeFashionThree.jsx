import MetaTags from "react-meta-tags";
import {LayoutOne,FeatureIconTwo,BlogFeatured,HeroSliderTen,NewProductGrid} from '../modules/index'
import React, { useState, Fragment,useEffect } from 'react'
import axios from 'axios';

export const HomeFashionThree = () => {

  return (<>

    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        {/* feature icon */}
        <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />
        {/* product grid */}
        <NewProductGrid category="accessories" limit={10} />
        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
    </>
  );
};

export default HomeFashionThree;
