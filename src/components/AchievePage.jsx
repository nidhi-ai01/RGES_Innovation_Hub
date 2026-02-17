import React from "react";

const galleries = [
  { title: "#SCSC Conclave", link: "https://drive.google.com/drive/folders/1q7XmF8wTuK6v1_YLczIA8d37RHdHJ3By?usp=drive_link" },
  { title: "#SSAG Cognition", link: "https://drive.google.com/drive/folders/1lGXhb7IKmscsA76v4rtuEk0KACVI7CvC?usp=drive_link" },
  { title: "A personlized...", link: "https://drive.google.com/drive/folders/1I0Vj4d2LJvtJFycHG7_87zLz5a4H7fXO?usp=drive_link" },
  { title: "BUILDIDS@2026", link: "https://drive.google.com/drive/folders/1QgHHJWVu76LjczJwea8uYOalaQ4KuT31?usp=drive_link" },
  { title: "CBIT College", link: "https://drive.google.com/drive/folders/1cTkZYj47d87sIzZHv1WEFPqeDtBeluym?usp=drive_link" },

  { title: "CEOs Collaboration", link: "https://drive.google.com/drive/folders/1xpCEtjlCTAt6LDgRZuDr5tZZ3OrgX9L4?usp=drive_link" },
  { title: "Commissionerate 1", link: "https://drive.google.com/drive/folders/1ZyVqiag-fmf0hRHD0PS-c3TaAW7Mwnqm?usp=drive_link" },
  { title: "Commissionerate 2", link: "https://drive.google.com/drive/folders/1pPkLbkRiQmWV65A7Kq5ydzDyusJOAXQI?usp=drive_link" },
  { title: "Cybersecurity for...", link: "https://drive.google.com/drive/folders/1w-ORDrXNvBFZ5ih8ygBqJz1gia-6zpgu?usp=drive_link" },
  { title: "Cybersecurity...", link: "https://drive.google.com/drive/folders/1b8yPi9jvIEbCwZSouX08apcfk6Io-Bw8?usp=drive_link" },

  { title: "google developer...", link: "https://drive.google.com/drive/folders/1MQxIInofdA1fTKYvgJEaUEKr87hnmaUf?usp=drive_link" },
  { title: "Guest Panel", link: "https://drive.google.com/drive/folders/1j_YNNq9zOaecS5-v2-RqPkIpJ2UoAsrr?usp=drive_link" },
  { title: "hashtag#FutureTe...", link: "https://drive.google.com/drive/folders/1aOI3CXg5d3GEYtW40oqrCVyjMqwdZT9S?usp=drive_link" },
  { title: "Memorandum of...", link: "https://drive.google.com/drive/folders/1g8aOfMYl8PBDCpQiihMsqRLEjC14eLI_?usp=drive_link" },
  { title: "panel discussion...", link: "https://drive.google.com/drive/folders/1fM6NkY6365DDQSR316H_B90HcWH23Tu9?usp=drive_link" },

  { title: "RGES TEAM", link: "https://drive.google.com/drive/folders/1IxKqQWLiSDYBV8AdWIM21rc3Ct1qR-k9?usp=drive_link" },
  { title: "Salesforces event", link: "https://drive.google.com/drive/folders/1MKZBCtpGZCds_l9YAuOVu9qLRopXHcq6?usp=drive_link" },
  { title: "security boat", link: "https://drive.google.com/drive/folders/143UWFGyujEDBuv1z4BCYOIVrFBrBxJlY?usp=drive_link" },
  { title: "SHIELD-2.0", link: "https://drive.google.com/drive/folders/1Mpej9mUapixRQUuPWG-3msz4X2LyyP-9?usp=drive_link" },
  { title: "Silver Sponsor", link: "https://drive.google.com/drive/folders/11K-ni7aQPOfDwF6JiKSxcP5dq0QbRC7F?usp=drive_link" },

  { title: "Smart India", link: "https://drive.google.com/drive/folders/1Ba7QJ_LN3lCGhPx2uL8hh_JmqI7xZeSm?usp=drive_link" },
  { title: "Telangana Academy", link: "https://drive.google.com/drive/folders/1NLwCdKruJEuHX6Vjj_YHbMMk5Ikzcky2?usp=drive_link" },
  { title: "Ui path community", link: "https://drive.google.com/drive/folders/1HJ3hhq8SdIgXAIztzPRkGtesgMBBlHL7?usp=drive_link" },
  { title: "ZERODAY - a premi...", link: "https://drive.google.com/drive/folders/1xbxOSlxUtgrOfvh_TERd54wS5xBvCjFI?usp=drive_link" },
];

export default function AchievePage() {
  return (
    <div className ="relative z-10 max-w-6xl mx-auto px-4 py-16">

      <h1 className="text-3xl font-bold mb-10 text-center">Achieve</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleries.map((item, index) => (
          <button
  key={index}
  onClick={() => window.open(item.link, "_blank")}
  className="p-6 rounded-xl shadow hover:shadow-xl border text-center font-medium transition hover:scale-105 cursor-pointer"
>
  {item.title}
</button>

        ))}
      </div>
    </div>
  );
}
