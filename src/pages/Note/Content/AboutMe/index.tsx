import React, { FC, ReactElement } from 'react';
import './index.scss'

const AboutMe:FC = ():ReactElement => {
  return (
    <div id="note-content-aboutme">
      <div id="note-content-aboutme-img"></div>
      <div id="note-content-aboutme-name">本明</div>
      <div id="note-content-aboutme-total">
        <div id="note-content-aboutme-article">文章<br />12</div>
        <div id="note-content-aboutme-tag">标签<br />2</div>
      </div>
      <div id="note-content-aboutme-btn">加入书签</div>
      <div id="note-content-aboutme-relate">
        <svg viewBox="0 0 1024 1024"><path d="M511.022545 64A448 448 0 0 0 63.022545 512a448 448 0 0 0 448 448A448 448 0 0 0 959.022545 512a448 448 0 0 0-448-448zM757.713455 651.636364c-11.636364 10.798545-31.464727-0.930909-50.548364-27.415273-8.285091 22.388364-19.083636 43.008-31.650909 61.533091 26.996364 9.634909 44.357818 24.669091 44.357818 41.658182 0 29.323636-51.851636 53.061818-115.898182 53.061818-37.981091 0-71.540364-8.331636-92.765091-21.224727-20.992 12.893091-54.784 21.224727-92.765091 21.224727-64 0-115.898182-23.738182-115.898181-53.061818 0-16.756364 17.361455-32.023273 44.357818-41.658182a280.389818 280.389818 0 0 1-31.650909-61.533091c-19.083636 26.251636-38.912 38.167273-50.501819 27.415273-15.825455-14.894545-9.821091-67.304727 13.684364-117.061819 5.399273-11.403636 11.170909-21.597091 17.175273-30.487272 3.258182-144.616727 98.536727-260.747636 215.412363-260.747637h0.372364c116.875636 0 212.154182 115.898182 215.412364 260.747637 6.004364 8.843636 11.776 19.083636 17.221818 30.487272 23.272727 49.757091 29.463273 102.213818 13.637818 117.061819z"></path></svg>
        <svg viewBox="0 0 1024 1024"><path d="M571.648 511.94c-10.257 0-20.517 9.525-20.517 21.25 0 9.527 10.255 19.053 20.517 19.053 15.393 0 26.385-9.527 26.385-19.053 0-11.724-10.99-21.25-26.385-21.25v0zM504.225 413c16.123 0 26.385-10.257 26.385-25.651 0-16.123-10.261-25.649-26.385-25.649-15.39 0-30.048 9.527-30.048 25.649-0.001 15.396 14.659 25.651 30.048 25.651v0zM512.287 62.492c-248.427 0-449.813 201.386-449.813 449.813 0 248.425 201.386 449.812 449.813 449.812 248.425 0 449.812-201.386 449.812-449.812 0.001-248.427-201.385-449.813-449.812-449.813v0zM427.275 626.265c-27.119 0-46.906-4.394-72.556-11.725l-74.019 37.38 21.257-63.031c-52.035-36.64-82.818-82.811-82.818-139.243 0-99.67 93.808-175.889 208.137-175.889 101.135 0 191.279 60.097 208.867 145.113-7.328-1.469-13.926-2.199-19.788-2.199-99.67 0-176.619 74.75-176.619 164.894 0 15.388 2.199 29.313 5.863 43.972-5.863 0.728-12.461 0.728-18.324 0.728v0zM732.882 698.085l14.655 52.77-55.697-31.512c-21.252 4.394-41.773 10.99-63.025 10.99-98.206 0-175.889-67.422-175.889-150.968 0-83.547 77.685-150.97 175.889-150.97 93.072 0 176.619 67.423 176.619 150.97 0 46.9-31.512 88.673-72.552 118.721v0zM359.117 361.7c-15.39 0-31.512 9.527-31.512 25.649 0 15.395 16.122 25.656 31.512 25.656 14.66 0 26.385-10.261 26.385-25.656 0-16.122-11.725-25.649-26.385-25.649v0zM686.712 511.94c-10.995 0-20.522 9.525-20.522 21.25 0 9.527 9.527 19.053 20.522 19.053 14.655 0 25.649-9.527 25.649-19.053 0-11.724-10.994-21.25-25.649-21.25v0zM686.712 511.94z"></path></svg>
        <svg viewBox="0 0 1024 1024"><path d="M64.6 512c0 195.6 125.4 361.9 300.1 422.9 23.5 5.9 19.9-10.8 19.9-22.2v-77.6c-135.8 15.9-141.3-74-150.5-89-18.5-31.5-61.9-39.5-49-54.5 31-15.9 62.5 4 98.9 58 26.4 39.1 77.9 32.5 104.1 26 5.7-23.5 17.9-44.5 34.7-60.9-140.7-25.2-199.4-111.1-199.4-213.3 0-49.5 16.4-95.1 48.4-131.8-20.4-60.6 1.9-112.4 4.9-120.1 58.2-5.2 118.5 41.6 123.3 45.3 33.1-8.9 70.8-13.7 112.9-13.7 42.4 0 80.3 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.4-43.9 2.9 7.7 24.7 58.3 5.5 118.1 32.5 36.8 49 82.8 49 132.4 0 102.3-59 188.3-200.2 213.2 23.5 23.3 38.1 55.5 38.1 91.1v112.7c0.8 9 0 17.9 15.1 17.9C832.7 877 960.4 709.4 960.4 512.1c0-247.5-200.6-447.9-447.9-447.9C265 64.1 64.6 264.5 64.6 512z"></path></svg>
        <svg viewBox="0 0 1024 1024"><path d="M578.653091 651.636364S512 704.977455 487.796364 718.941091c-18.711273 10.798545-38.539636 19.549091-59.112728 26.065454a247.808 247.808 0 0 1-46.871272 10.705455c-13.405091 1.489455-24.529455 2.420364-33.326546 2.839273a7.214545 7.214545 0 0 1-3.118545 0.651636h-10.100364a249.949091 249.949091 0 0 1-65.070545-8.238545 164.770909 164.770909 0 0 1-53.154909-24.203637 117.853091 117.853091 0 0 1-35.84-40.215272c-8.843636-16.197818-13.218909-34.909091-13.21891-56.32 0.465455-18.432 5.445818-35.188364 15.080728-50.269091 9.774545-15.220364 22.481455-28.299636 37.422545-38.4a177.524364 177.524364 0 0 1 50.967273-23.924364c18.245818-5.399273 37.236364-7.726545 56.32-6.888727a339.316364 339.316364 0 0 1 53.434182 6.562909c16.663273 3.444364 33.140364 7.773091 49.338182 12.939636 15.732364 5.026909 30.626909 10.472727 44.683636 16.290909 14.056727 5.957818 27.322182 11.589818 39.889454 17.035637 10.798545 4.514909 21.690182 8.704 32.721455 12.567272 12.148364-15.499636 22.388364-30.72 30.813091-45.614545 13.125818-22.993455 24.250182-47.057455 33.326545-71.959273 2.978909-8.378182 4.840727-14.242909 5.678546-17.594182H344.715636v-30.254545h128.884364V341.038545h-179.2v-30.208h179.2V254.138182c0-3.723636 2.094545-6.795636 6.283636-9.076364a44.218182 44.218182 0 0 1 14.475637-4.747636c6.330182-1.256727 13.451636-1.861818 21.410909-1.861818h48.407273v72.285091h184.273454v30.254545h-184.32v69.771636h146.478546l0.09309-0.651636v0.651636h-0.09309c-2.978909 18.664727-7.912727 38.4-14.987637 59.112728a455.540364 455.540364 0 0 1-26.112 61.626181 432.965818 432.965818 0 0 1-45.614545 71.07491s144.290909 69.073455 296.727272 93.370181A448 448 0 0 0 512 64a448 448 0 1 0 369.664 701.160727c-82.059636-17.873455-169.239273-54.085818-303.010909-113.524363z m-354.676364-30.533819c-1.675636 76.706909 85.643636 82.385455 99.141818 82.85091 44.544 1.303273 80.477091-15.36 108.45091-31.883637 27.973818-16.523636 73.634909-59.205818 75.403636-60.648727a112.64 112.64 0 0 0 4.980364-4.701091c-12.194909-6.702545-24.203636-12.846545-35.979637-18.525091-11.776-5.632-71.68-37.608727-124.788363-43.054545-100.677818-10.379636-126.650182 52.689455-127.162182 75.962181z"></path></svg>
        <svg viewBox="0 0 1024 1024"><path d="M512.268258 64.430032c-247.183323 0-447.569968 200.384597-447.569968 447.57304 0 247.1823 200.385621 447.56792 447.569968 447.56792s447.569968-200.385621 447.569968-447.56792c0-247.189467-200.386645-447.57304-447.569968-447.57304z m250.63996 279.572912L513.037196 588.684915l-252.244389-244.681971h502.115411z m-519.180508 35.60766l139.605741 133.484953-139.605741 130.956981V379.610604z m17.561682 300.386452L409.779385 534.941175l102.685459 98.191626 101.170109-98.191626 150.007391 145.055881H261.289392z m519.519413-35.944518L637.395236 512.731054l143.413569-135.081191v266.402675z"></path></svg>
      </div>
    </div>
  );
}

export default AboutMe;