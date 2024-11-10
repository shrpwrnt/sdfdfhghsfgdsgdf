import { useState } from 'react';
import * as Styled from './Giver.styled'

const tabContents = [
  {
    title: '100k EMPTY',
    content: (
      <Styled.GiverList>
        <Styled.GiverAddr>1.EQCTrzjBEFLNeTQ6XPw_CXdblyr6-jxvHRetbrA4V3TI4_qn <br /> <a href="https://tonviewer.com/EQCTrzjBEFLNeTQ6XPw_CXdblyr6-jxvHRetbrA4V3TI4_qn">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>2.EQA7dlAKfLo35YvP86Ihgh6glPkz2hm5t_YaOzr57_6WetbB <br /> <a href="https://tonviewer.com/EQA7dlAKfLo35YvP86Ihgh6glPkz2hm5t_YaOzr57_6WetbB">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>3.EQAWwTrEf6sceFZttOgXfitk-bGr-hysLiD9f2B7W7EQ8Ewi <br /> <a href="https://tonviewer.com/EQAWwTrEf6sceFZttOgXfitk-bGr-hysLiD9f2B7W7EQ8Ewi">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>4.EQCmHv_sYr2E-_gKGofdQmS1GeSNuUA8UkKQclZxCwTt7WwL <br /> <a href="https://tonviewer.com/EQCmHv_sYr2E-_gKGofdQmS1GeSNuUA8UkKQclZxCwTt7WwL">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>5.EQAGEpmd3yskdd6inKikj8PhaZ3o3SP62XznpGyrFhyEhOre <br /> <a href="https://tonviewer.com/EQAGEpmd3yskdd6inKikj8PhaZ3o3SP62XznpGyrFhyEhOre">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>6.EQACNT93GI-C7w-n_M-Y-ED4OF4MDHZNdrluhsvYl2a-AWEm <br /> <a href="https://tonviewer.com/EQACNT93GI-C7w-n_M-Y-ED4OF4MDHZNdrluhsvYl2a-AWEm">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>7.EQCj-__lhvg4pSDgJeGTRBBGadGMid0nSASB6qUXe3KdZKBQ <br /> <a href="https://tonviewer.com/EQCj-__lhvg4pSDgJeGTRBBGadGMid0nSASB6qUXe3KdZKBQ">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>8.EQBh8k9YGTQSyzQWeGejsbwvi37CVpxPPiTy-9AV0lvRxIap <br /> <a href="https://tonviewer.com/EQBh8k9YGTQSyzQWeGejsbwvi37CVpxPPiTy-9AV0lvRxIap">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>9.EQCcl7pBJSLHHrBGMbJ09zUILVG9axrJjuD2VBJNm0B5PaTZ <br /> <a href="https://tonviewer.com/EQCcl7pBJSLHHrBGMbJ09zUILVG9axrJjuD2VBJNm0B5PaTZ">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>10.EQDiGif10-8wZ9hNBDyvdLKjE10vSg6oVAnpVGM3TlPEFDTV <br /> <a href="https://tonviewer.com/EQDiGif10-8wZ9hNBDyvdLKjE10vSg6oVAnpVGM3TlPEFDTV">link</a></Styled.GiverAddr>
      </Styled.GiverList>
    ),
  },
  {
    title: '10k',
    content: (
      <Styled.GiverList>
        <Styled.GiverAddr>1.EQBWJAVLcgsiNPtGlXMI-MsDKXFhYNxkqJe9Tx7P6kkvfr7R <br /> <a href="https://tonviewer.com/EQBWJAVLcgsiNPtGlXMI-MsDKXFhYNxkqJe9Tx7P6kkvfr7R">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>2.EQAc1D24YIG22X2Ytxy0CNJJDbX8HLMoAl57IYPK4mWBICzB <br /> <a href="https://tonviewer.com/EQAc1D24YIG22X2Ytxy0CNJJDbX8HLMoAl57IYPK4mWBICzB">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>3.EQBBhpJTYwSjkFbT6AgraQUjIh-BiQB6Kl-JZgnaqeHYlSks <br /> <a href="https://tonviewer.com/EQBBhpJTYwSjkFbT6AgraQUjIh-BiQB6Kl-JZgnaqeHYlSks">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>4.EQC71pti9B-nv7x_EahwT5cILIo4A4uGXjVKQZV2KaOeE1Ah <br /> <a href="https://tonviewer.com/EQC71pti9B-nv7x_EahwT5cILIo4A4uGXjVKQZV2KaOeE1Ah">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>5.EQC8Tk_gUW-ZDGnc_tpXG77K2K7Fu-8npEKvvM5XM1UXqmaQ <br /> <a href="https://tonviewer.com/EQC8Tk_gUW-ZDGnc_tpXG77K2K7Fu-8npEKvvM5XM1UXqmaQ">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>6.EQBxhN4G2Iu6HYhm4Al43E-S0BfqMJeCNc4NCIIafu2WSP0x <br /> <a href="https://tonviewer.com/EQBxhN4G2Iu6HYhm4Al43E-S0BfqMJeCNc4NCIIafu2WSP0x">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>7.EQAztesH1zLPDxreHZxuo4_RbbDiT3O9KkG6RmPLUBXd7mSq <br /> <a href="https://tonviewer.com/EQAztesH1zLPDxreHZxuo4_RbbDiT3O9KkG6RmPLUBXd7mSq">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>8.EQDqdbPhf7fQkx1MmPpbLPivrX1YDXO4UJD4CuBdIzmIJXJM <br /> <a href="https://tonviewer.com/EQDqdbPhf7fQkx1MmPpbLPivrX1YDXO4UJD4CuBdIzmIJXJM">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>9.EQC8MOTMWfkk89Q0jRTkrhQGb5LSBdGy0ZfWy1ZdKMY8tps2 <br /> <a href="https://tonviewer.com/EQC8MOTMWfkk89Q0jRTkrhQGb5LSBdGy0ZfWy1ZdKMY8tps2">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>10.EQBDj8tB3Aw_wmBZKYPEERfG3v1mYZzlSfA4P3YH8gr-wk63 <br /> <a href="https://tonviewer.com/EQBDj8tB3Aw_wmBZKYPEERfG3v1mYZzlSfA4P3YH8gr-wk63">link</a></Styled.GiverAddr>
      </Styled.GiverList>
    ),
  },
  {
    title: '1k',
    content: (
      <Styled.GiverList>
        <Styled.GiverAddr>1.EQAhli-8TGvQxp9UpsqKOvvpqYTlxJAAi605WpPWxd3ByUmh <br /> <a href="https://tonviewer.com/EQAhli-8TGvQxp9UpsqKOvvpqYTlxJAAi605WpPWxd3ByUmh">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>2.EQBFE3upfBKA28biwGKNQL4X4T6zkUctupOoj2CrNvWDotk5 <br /> <a href="https://tonviewer.com/EQBFE3upfBKA28biwGKNQL4X4T6zkUctupOoj2CrNvWDotk5">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>3.EQAeiRcerAkeOL4tFGO_bVFHbX9Ogn4kxd8o_4wYj6rsmhZl <br /> <a href="https://tonviewer.com/EQAeiRcerAkeOL4tFGO_bVFHbX9Ogn4kxd8o_4wYj6rsmhZl">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>4.EQCtEj4mwXep86AZ4rlWEdFQ4bTD-VntNtmUz_BuTMJn_A-9 <br /> <a href="https://tonviewer.com/EQCtEj4mwXep86AZ4rlWEdFQ4bTD-VntNtmUz_BuTMJn_A-9">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>5.EQAWImIGKC7vRnm64UzSivbfKp2EkFssyQnU0qTiiKnBh2BD <br /> <a href="https://tonviewer.com/EQAWImIGKC7vRnm64UzSivbfKp2EkFssyQnU0qTiiKnBh2BD">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>6.EQAbx5taDPVfJQw0xRTtoRZ7P-IfdcpR0ICYB0aHhYIFW-PO <br /> <a href="https://tonviewer.com/EQAbx5taDPVfJQw0xRTtoRZ7P-IfdcpR0ICYB0aHhYIFW-PO">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>7.EQD3AiMsd3LdG1x8PhGDc5c2RTYPlMEXWUWRGod8G14z6oft <br /> <a href="https://tonviewer.com/EQD3AiMsd3LdG1x8PhGDc5c2RTYPlMEXWUWRGod8G14z6oft">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>8.EQBPM0_T6EqI-wYDLAEBpHRgpSKc6tEHRlmaMon6gHYr_UKX <br /> <a href="https://tonviewer.com/EQBPM0_T6EqI-wYDLAEBpHRgpSKc6tEHRlmaMon6gHYr_UKX">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>9.EQClR-q76MmJNWtmpuXgQB7QF-ZQNxgRgeQHYuqgdmzVDALW <br /> <a href="https://tonviewer.com/EQClR-q76MmJNWtmpuXgQB7QF-ZQNxgRgeQHYuqgdmzVDALW">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>10.EQBArSEUB3jXbeEm8wbF12ep939Mx2hG9xLNElriwssWJkxw <br /> <a href="https://tonviewer.com/EQBArSEUB3jXbeEm8wbF12ep939Mx2hG9xLNElriwssWJkxw">link</a></Styled.GiverAddr>
      </Styled.GiverList>
    ),
  },
  {
    title: '100',
    content: (
      <Styled.GiverList>
        <Styled.GiverAddr>1.EQAn6OCxsf0Xm9QvkQruG-tpc_8Bo26vA3OEnhvqJ7twh9Jm <br /> <a href="https://tonviewer.com/EQAn6OCxsf0Xm9QvkQruG-tpc_8Bo26vA3OEnhvqJ7twh9Jm">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>2.EQDMNcuZw4g2TEMtlycQjY2Dstmc9mC0KUtSetZPHW2RlZmm <br /> <a href="https://tonviewer.com/EQDMNcuZw4g2TEMtlycQjY2Dstmc9mC0KUtSetZPHW2RlZmm">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>3.EQCtbN68Egl3mTONcvWmtqqrO2MC-zFCHupTfydTt93SFlsS <br /> <a href="https://tonviewer.com/EQCtbN68Egl3mTONcvWmtqqrO2MC-zFCHupTfydTt93SFlsS">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>4.EQDg4GaagfVb6yIViUze1BGcQV_IRHGDVVwxt576WIMQzwZd <br /> <a href="https://tonviewer.com/EQDg4GaagfVb6yIViUze1BGcQV_IRHGDVVwxt576WIMQzwZd">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>5.EQChl0AZYulTGp7m1xGK3TSK-qeI9ozMgh5aMB1Q1Pq5H09F <br /> <a href="https://tonviewer.com/EQChl0AZYulTGp7m1xGK3TSK-qeI9ozMgh5aMB1Q1Pq5H09F">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>6.EQBPn11TnDnG8bmKTvTo_TEPUlBESNrngVxBBlBw50fW2uto <br /> <a href="https://tonviewer.com/EQBPn11TnDnG8bmKTvTo_TEPUlBESNrngVxBBlBw50fW2uto">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>7.EQCc1nypxRUX3gy2YFgO7G7xCTY2Kfj7f2_chMzmqe7yiF4C <br /> <a href="https://tonviewer.com/EQCc1nypxRUX3gy2YFgO7G7xCTY2Kfj7f2_chMzmqe7yiF4C">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>8.EQDuc-eiTYY8uqMW9Bq3zgtyNYH5Y3ukikg0MT2LgeBbzpb9 <br /> <a href="https://tonviewer.com/EQDuc-eiTYY8uqMW9Bq3zgtyNYH5Y3ukikg0MT2LgeBbzpb9">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>9.EQBFnbF_4234X2Vem2OqbAu0GnNhYjmO4NtpB0xEdK3tSgh6 <br /> <a href="https://tonviewer.com/EQBFnbF_4234X2Vem2OqbAu0GnNhYjmO4NtpB0xEdK3tSgh6">link</a></Styled.GiverAddr>
        <Styled.GiverAddr>10.EQB7VIXkh5UB7SUJgoU-H2Rc1a2kkbnDlEtJOcx7KMC8a0Ca <br /> <a href="https://tonviewer.com/EQB7VIXkh5UB7SUJgoU-H2Rc1a2kkbnDlEtJOcx7KMC8a0Ca">link</a></Styled.GiverAddr>
      </Styled.GiverList>
    ),
  },
];

const Giver = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Styled.Container>
      <Styled.TabList>
        {tabContents.map((tab, index) => (
          <Styled.Tab 
            key={index} 
            isActive={activeTab === index} 
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </Styled.Tab>
        ))}
      </Styled.TabList>
      <Styled.ContentArea>
        {tabContents[activeTab].content}
      </Styled.ContentArea>
    </Styled.Container>
  );
};

export default Giver
