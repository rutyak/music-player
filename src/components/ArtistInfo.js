import React from "react";
import bluetik from "../assets/bluetickImage.png";

const ArtistInfo = () => {
  return (
    <div className="w-full mt-9 flex items-center justify-center">
      <div
        className="relative w-full mx-20 top-10 h-[240px] rounded-3xl"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/27d6/181f/b614afab3396f4c60bfa19b926b4b71d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I-uyfKnV79xAdqXl27Al7vFZ1Q8AYuplGxa73dauzWDbc2HPsr2gQQPB4ap6sZJvVsUY7v~ZKzZ9CmDaXRB6h441PVotM5u4TvLsQmkJxWbKELlGEHTX7zau~wHR3ncSOEfpVPNOClTZXKcbSL0DiKTF87daCo4NGynyB1g3PBwz2eehBYt0FDVBk9x7CCTNNr0mj1UGJ0ruGz07fuyFinTge7XOGmI3z-YENc-z3RNwuV1w9Z8VXVhX0u5ls7al9okoFmpVwfxd6W39-ZI3dghWN6ryZLEHeC-u3iqOZHg4YEIioI6eUfNDj85jTj9qlbASXIURPUClX3V8WmyyZA__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>

        <div className="relative bottom-[60px] right-[23px] flex items-center justify-end h-full">
          <div className="">
            <img
              src="https://s3-alpha-sig.figma.com/img/228e/160e/5d55e4ce985c98f27a2e4560589055d1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=li~6uyXe14zFfvD5sxmQsKZfSHIG7IehCPQAQfVcQJ~wUCyMt0FN441NmoG8zLeR~hFC2-CqyulxhApDTdBN18rGUpo6iByRbAEzoEZaKir0DkUiUCGeLeiGMbIgcy3-OPnYizIhO6exo1ApHbJE~lX1bfFksOj9EJE3gIyj0vhERTHCIzcpKYygTNRzldbShObKYWQOgVs1m2d8qBTq7u6A~DDHlkSr~o-g~KfuoEYDndVeYDqBa4i3-aPRXlVp1m2Sq9tHAqZg05mYbnKuTTlR~IMR0MmlQIQD1j2natfycOLxI7l8FNCH7~NakO~0qJIPr~hOQtuwKUz8CNmsMw__"
              alt="Michael Jackson"
              className="object-cover rounded-lg w-[480px] h-[360px]"
            />
            <div className="absolute bottom-4 left-12 text-white">
              <div className="flex items-center">
                <img className="w-5 mr-2" src={bluetik} alt="blue-tic-icon" />
                <span>Verified Artist</span>
              </div>
              <h2 className="font-semibold lg:text-3xl xl:text-4xl">
                Michael Jackson
              </h2>
              <p className="mt-5 lg:text-lg xl:text-sm">
                27.852.501 monthly listeners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
