<template>
  <div class="w-full">
    <div
      class="recharts-responsive-container"
      style="width: 100%; height: 280px; min-width: 0px;"
    >
      <div style="width: 0px; overflow-x: visible">
        <div
          width="718"
          height="280"
          class="recharts-wrapper"
          style="position: relative; cursor: default; width: 718px; height: 280px;"
        >
          <svg
            role="application"
            tabindex="0"
            class="recharts-surface"
            width="718"
            height="280"
            viewBox="0 0 718 280"
            style="width: 100%; height: 100%; display: block;"
          >
            <defs>
              <clippath id="recharts1-clip">
                <rect x="60" y="10" height="240" width="648"></rect>
              </clippath>
            </defs>
            <defs>
              <lineargradient id="_r_0_" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#95D2E6" stop-opacity="0.4"></stop>
                <stop offset="100%" stop-color="#95D2E6" stop-opacity="0.05"></stop>
              </lineargradient>
            </defs>
            <g>
              <g class="recharts-layer recharts-area">
                <g class="recharts-layer">
                  <path
                    stroke-width="2"
                    fill="url(#_r_0_)"
                    fill-opacity="0.6"
                    height="240"
                    stroke="none"
                    width="648"
                    id="recharts-area-_r_1_"
                    class="recharts-curve recharts-area-area"
                    d="M60,158.8C103.2,151.083,146.4,143.367,189.6,132.4C232.8,121.433,276,102.192,319.2,93C362.4,83.808,405.6,82.25,448.8,77.25C492,72.25,535.2,68.167,578.4,63C621.6,57.833,664.8,52.042,708,46.25L708,250C664.8,250,621.6,250,578.4,250C535.2,250,492,250,448.8,250C405.6,250,362.4,250,319.2,250C276,250,232.8,250,189.6,250C146.4,250,103.2,250,60,250Z"
                  ></path>
                  <path
                    stroke-width="2"
                    fill="none"
                    fill-opacity="0.6"
                    height="240"
                    stroke="#95D2E6"
                    width="648"
                    class="recharts-curve recharts-area-curve"
                    d="M60,158.8C103.2,151.083,146.4,143.367,189.6,132.4C232.8,121.433,276,102.192,319.2,93C362.4,83.808,405.6,82.25,448.8,77.25C492,72.25,535.2,68.167,578.4,63C621.6,57.833,664.8,52.042,708,46.25"
                  ></path>
                </g>
              </g>
            </g>
            <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
              <g class="recharts-cartesian-axis-ticks">
                <g v-for="(label, i) in ['Jan 2026', 'Oct 2026', 'Jul 2027', 'Apr 2028', 'Jan 2029', 'Jan 2030']" :key="i" class="recharts-layer recharts-cartesian-axis-tick">
                  <text
                    height="30"
                    orientation="bottom"
                    width="648"
                    stroke="none"
                    font-size="14"
                    :x="60 + i * (627 / 5)"
                    y="268"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="middle"
                    fill="#98AFB2"
                  >
                    <tspan :x="60 + i * (627 / 5)" dy="0.71em">{{ label }}</tspan>
                  </text>
                </g>
              </g>
            </g>
            <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
              <g class="recharts-cartesian-axis-ticks">
                <g v-for="(val, i) in ['0', '5B', '10B', '15B']" :key="i" class="recharts-layer recharts-cartesian-axis-tick">
                  <text
                    width="50"
                    orientation="left"
                    height="240"
                    stroke="none"
                    font-size="14"
                    x="46"
                    :y="250 - i * (240 / 3)"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#98AFB2"
                  >
                    <tspan x="46" dy="0.355em">{{ val }}</tspan>
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
