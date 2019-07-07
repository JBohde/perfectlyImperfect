import React from 'react';

class AdSense extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: 'ca-pub-8814263255628634',
      enable_page_level_ads: true,
    });
  }

  render() {
    return (
      <div className="adsense-container">
        <ins
          className="adsbygoogle"
          data-ad-client="ca-pub-8814263255628634"
          enable_page_level_ads="true"
          data-ad-slot=""
          data-ad-format="responsive"
        />
      </div>
    );
  }
}
export default AdSense;
