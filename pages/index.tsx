import { useEffect, useState, useRef } from "react";
import Head from "next/head";

export default function Home() {
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("5524912344321");
  const [msg, setMsg] = useState("");
  const [product, setProduct] = useState("");
  const [intro, setIntro] = useState("Hi! I'm interested in this product:");

  useEffect(() => {
    var newUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(
      phone
    )}&text=${encodeURIComponent(intro)}%0A%0A${encodeURIComponent(product)}`;
    setUrl(newUrl);
  }, [intro, product, phone]);

  const textArea = useRef(null);

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Simple URL Generation tool for WhatsApp Based Stores"
        />
        <title>WhatsApp Message URL Generator</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H2C55SQ6FQ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-H2C55SQ6FQ');`,
          }}
        />
      </Head>

      <div className="container">
        <div className="amazonDesktop">
          <iframe
            src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=11&l=ez&f=ifr&linkID=e4b5008e78779fd6d6222e3f606c5dc7&t=ivetravelledw-20&tracking_id=ivetravelledw-20"
            width="120"
            height="600"
            scrolling="no"
            style={{ border: "none", margin: 0 }}
          ></iframe>
        </div>
        <div className="mainContent">
          <h1>WhatsApp Link Generator</h1>
          <label htmlFor="link">
            Phone number
            <br />
            (with country code - just numbers)
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="link">Intro</label>
          <input
            type="text"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
          <label htmlFor="link">Message</label>
          <input
            type="text"
            placeholder="Blue Jeans"
            onChange={(e) => setProduct(e.target.value)}
          />
          <label htmlFor="textURL">Link</label>
          <textarea value={url} readOnly ref={textArea} />
          <button
            onClick={() => {
              var el = textArea.current;
              el.select();
              document.execCommand("copy");
              setMsg("Copied!");
              setTimeout(() => {
                setMsg("");
              }, 2000);
            }}
          >
            Copy Link
          </button>
          <span style={{ opacity: msg != "" ? 1 : 0 }}>{msg}</span>

          <div className="amazonMobile">
            <iframe
              src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=9&l=ez&f=ifr&linkID=2a830ba594ded132f2242c8c29a7e244&t=ivetravelledw-20&tracking_id=ivetravelledw-20"
              width="180"
              height="150"
              scrolling="no"
              style={{ border: "none", margin: 0 }}
            ></iframe>
          </div>
        </div>
        <div className="amazonDesktop">
          <iframe
            src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=11&l=ez&f=ifr&linkID=e4b5008e78779fd6d6222e3f606c5dc7&t=ivetravelledw-20&tracking_id=ivetravelledw-20"
            width="120"
            height="600"
            scrolling="no"
            style={{ border: "none", margin: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
