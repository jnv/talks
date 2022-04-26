---
title: PragueJS 2022/04
theme: black
highlightTheme: tomorrow-night-bright
revealOptions:
  transition: fade
  controls: false
  autoPlayMedia: true
---

## How to lose users &amp; alienate&nbsp;developers

PragueJS, April 2022

---

![Superface](img/superface.svg)

---

## Developers<br>=<br>Users

---

## Developer Experience<br>=<br>User Experience

---

## Documentation<br><span style="text-transform: none;">APIs</span><br>Packages

---

vidbg: https://giphy.com/gifs/g-help-11Wkoq2MaUbLXi

---

## How to win users &amp; make developers happy

---

vidbg: https://media.giphy.com/media/tmQrpA8zpG4a16SSxm/giphy.gif

---

<section data-auto-animate>
<h2>How to lose users &amp; alienate&nbsp;developers</h2>
Jan Vlnas, Dev<span style="visibility: hidden">il's</span> Advocate<span style="visibility: hidden"> 😈</span>
</section>
<section data-auto-animate>
<h2>How to lose users &amp; alienate&nbsp;developers</h2>
Jan Vlnas, Dev<span>il's</span> Advocate<span> 😈</span>
</section>

---

## Why? <!-- .element: class="r-fit-text" -->

---

- Open-source = portfolio 👍
- People may use it 🤷 <!-- .element: class="fragment" -->
- Users demand fixes 😫 <!-- .element: class="fragment" -->
- Users demand features 😡 <!-- .element: class="fragment" -->

---

## Goals <!-- .element: class="r-fit-text" -->

---

vidbg: https://media.giphy.com/media/11bsDL7acBaiKk/giphy.gif

---

vidbg: https://media.giphy.com/media/clnjwheMYqCpDBsDiW/giphy.gif

---

<!-- only for true users -->

vidbg: https://giphy.com/gifs/angry-spongebob-squarepants-strong-D7z8JfNANqahW

---

- Docs
- Interfaces
- Packages

---

## Docs <!-- .element: class="r-fit-text" -->

---

![](img/no_readme.png)

---

vidbg: https://media.giphy.com/media/3DzwbT4oF52JG/giphy.gif

---

## Do this ✅

- fancy words
- jargon
- emphasize simplicity

---

“revolutionary”

“sophisticated”

“unparalleled”

---

“DLTs promise to revolutionize business ecosystems by permitting secure transactions without intermediaries.”

<!-- https://github.com/DLPS-Framework/DAppFormation -->

---

<section data-auto-animate>
“<span>[redacted]</span> is a universal API client which provides an unparalleled developer experience for every HTTP&nbsp;API.”
</section>
<section data-auto-animate>
“<strong>OneSDK</strong> is a universal API client which provides an unparalleled developer experience for every HTTP&nbsp;API.”
</section>

---

<!-- elementary my dear -->

vidbg: https://media.giphy.com/media/3oEjHD20zWeDvGWoF2/giphy.gif

---

“Just simply install FooBar”

---

“Just one simple SDK for all the APIs you want to integrate with.”

---

<div style="display: flex; align-items: center;">

![](img/drake1.jpg) <!-- .element: class="fragment" -->

Examples without reference

</div>

---

<div style="display: flex; align-items: center;">

![](img/drake2.jpg)

Reference without examples

</div>

---

![](img/typedoc.png)

---

## Interfaces <!-- .element: class="r-fit-text" -->

---

## Do this ✅

- avoid consistency
- expose complexity

---

<pre><code data-line-numbers="|2-4|7-8|9-15">{
  "page_count": 1,
  "page_size": 25,
  "total_items": 3,
  "bookings": [
    {
      "arrivalDate": "2022-11-01",
      "departureDate": "2022-12-03",
      "reference-id": null,
      "created-at": "2020-01-03 13:51",
      "guest-name": "Harry Potter",
      "check-in": "16:00",
      "check-out": "10:00",
      "price-paid": "Yes",
      "prepayment-paid": "No"
    }
  ]
}
</code></pre>

---

✅ camelCase

✅ snake_case

✅ kebab-case

---

> If the domain is hard, users should feel the pain.

---

vidbg: https://media.giphy.com/media/saAZVlxwMPOW4/giphy.gif

---

<section data-auto-animate>
/v2/organizationAcls?q=roleAssignee&state=APPROVED&role=ADMINISTRATOR&count=100projection=(paging,elements(*(organization~(id,localizedName,vanityName,&hairsp;logoV2(cropped~:playableStreams)))))
</section>

<section data-auto-animate>
<strong>api.linkedin.com</strong>
/v2/organizationAcls?q=roleAssignee&state=APPROVED&role=ADMINISTRATOR&count=100&projection=(paging,elements(*(organization~(id,localizedName,vanityName,&hairsp;logoV2(cropped~:playableStreams)))))
</section>

---

```json
{
  "specificContent": {
    "com.linkedin.ugc.ShareContent": {
      "shareMediaCategory": "LIVE_VIDEO",
      "shareCommentary": {
        "attributes": [],
        "text": ""
      },
      "media": [
        {
          "media~": {
            "paging": {
              "count": 10,
              "start": 0,
              "links": []
            },
            "elements": [
              {
                "artifact": "urn:li:digitalmediaMediaArtifact:(urn:li:digitalmediaAsset:C4D24AQGPmrEiJ7bLXw,urn:li:digitalmediaMediaArtifactClass:feedshare-live-vod-ambry-analysis)",
                "authorizationMethod": "PUBLIC",
                "data": {
                  "com.linkedin.digitalmedia.mediaartifact.Video": {
                    "videoStreams": []
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

---

## Packages <!-- .element: class="r-fit-text" -->

---

## Do this ✅

- embrace dependencies
- make a statement
- get rich and (in)famous

---

## DRY <!-- .element: class="r-fit-text" -->

---

heaviest

---

heaviest 2

---

vidbg: https://media.giphy.com/media/V4NSR1NG2p0KeJJyr5/giphy.gif

---

vidbg" https://media.giphy.com/media/yS36IeP5FpzxqkfuCj/giphy.gif
