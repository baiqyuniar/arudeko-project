import React from "react";

const News = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 lg:mt-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                width="52"
                height="24"
              />
            </svg>
          </span>
          Events & News
        </h2>
      </div>

      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900 lg:mt-12 sm:text-4xl md:mx-auto">
              Events
            </h2>
          </div>
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p className="w-full mt-4 px-8">
            PT. Abiudaya Raya Utama berkomitmen untuk menghasilkan hasil
            bangunan arsitektur, dan interior yang bermutu dan berorientasi pada
            kepuasaan konsumen.
          </p>
          <p className="w-full mt-2 px-8">
            Proyek yang dikerjakan meliputi, rumah, kantor, apartment, dan
            hotel. Sejak tahun 2021 PT . Abiudaya Raya Utama telah mengembangkan
            sayap perkerjaan dilingkup perkerjaan arsitektur, bangunan, interior
            kantor, hunian, dan ruko. Adapula PT.Abiudaya Raya Utama memiliki
            workshop didaerah Karang Tengah, Kota Tangerang.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900  sm:text-4xl md:mx-auto">
              Popular News
            </h2>
          </div>
          <div className="p-4 mb-4 hover:cursor-default border-b hover:bg-slate-300 hover:rounded-lg">
            <h6 className="mb-2 font-semibold leading-5">Lorem Ipsum</h6>
            <p className="text-base text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              dolor id urna auctor dictum non ut tellus. Pellentesque iaculis
              sit amet orci a venenatis. Proin placerat convallis consequat.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Quisque aliquam risus vel ipsum tempor eleifend nec a neque.
            </p>
          </div>
          <div className="p-4 mb-4 hover:cursor-default border-b hover:bg-slate-300 hover:rounded-lg">
            <h6 className="mb-2 font-semibold leading-5">Lorem Ipsum</h6>
            <p className="text-base text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              dolor id urna auctor dictum non ut tellus. Pellentesque iaculis
              sit amet orci a venenatis. Proin placerat convallis consequat.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Quisque aliquam risus vel ipsum tempor eleifend nec a neque.
            </p>
          </div>
          <div className="p-4 mb-4 hover:cursor-default border-b hover:bg-slate-300 hover:rounded-lg">
            <h6 className="mb-2 font-semibold leading-5">Lorem Ipsum</h6>
            <p className="text-base text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              dolor id urna auctor dictum non ut tellus. Pellentesque iaculis
              sit amet orci a venenatis. Proin placerat convallis consequat.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Quisque aliquam risus vel ipsum tempor eleifend nec a neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
