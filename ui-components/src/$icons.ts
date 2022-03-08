import { $svg, attr } from "@aelea/dom"

export const $path = $svg('path')


export const $glp = $path(
  attr({
    d: 'M29.79 9.507h-4.012l-.1-.14A11.747 11.747 0 0014.033 4.42C8.054 5.434 3.817 10.884 4.293 16.9l7.145.012-2.08-5.876 2.556-3.496 4.551 12.943-11.47-.012h-3.56l-.062-.226a13.521 13.521 0 01-.377-1.717C-.408 10.257 5.183 2.39 13.456.998c6.582-1.114 13.05 2.119 16.096 8.058l.238.45zm1.429 6.502c0 7.28-5.253 13.744-12.673 14.997a16.43 16.43 0 01-2.583.213A15.135 15.135 0 012.44 22.9l-.238-.451h3.986l.1.137a11.765 11.765 0 0011.658 4.963c5.979-1.016 10.203-6.466 9.727-12.492l-7.12-.014 2.08 5.877-2.544 3.496-4.563-12.943 15.017.025.063.226c.172.57.306 1.152.401 1.742.145.84.216 1.69.213 2.543z'
  })
)()

export const $check = $path(
  attr({
    d: 'M21 11.086v.92a8.966 8.966 0 01-2.64 6.362A8.965 8.965 0 0111.995 21a8.968 8.968 0 01-6.362-2.64A8.973 8.973 0 013 11.995a8.965 8.965 0 012.64-6.362A8.97 8.97 0 0112.005 3a8.844 8.844 0 013.649.775 1 1 0 10.83-1.819A10.849 10.849 0 0012.007 1a10.97 10.97 0 00-7.78 3.217A10.97 10.97 0 001 11.994a10.97 10.97 0 003.217 7.78A10.963 10.963 0 0011.993 23a10.974 10.974 0 007.78-3.217A10.969 10.969 0 0023 12.006v-.92a1 1 0 00-2 0zm.293-7.787L12 12.601l-2.293-2.292a.999.999 0 10-1.414 1.414l3 3c.39.391 1.024.39 1.415 0l10-10.01A1 1 0 1021.293 3.3v-.001z'
  })
)()

export const $target = $path(
  attr({
    d: 'M27.907 14.5A12.006 12.006 0 0017.5 4.093V1h-3v3.093A12.006 12.006 0 004.093 14.5H1v3h3.093A12.006 12.006 0 0014.5 27.907V31h3v-3.093A12.006 12.006 0 0027.907 17.5H31v-3h-3.093zM16 7a9 9 0 110 18 9 9 0 010-18zm0 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z'
  })
)()

export const $share = $path(
  attr({
    d: 'M25.333 22.177c1.264 0 2.334.435 3.209 1.305.875.87 1.312 1.895 1.312 3.07 0 1.224-.45 2.271-1.349 3.142-.9.87-1.956 1.306-3.172 1.306-1.215 0-2.272-.435-3.171-1.306-.9-.87-1.35-1.918-1.35-3.141 0-.47.025-.8.073-.988l-11.01-6.212c-.924.8-1.993 1.2-3.208 1.2-1.264 0-2.358-.447-3.282-1.341C2.462 18.318 2 17.259 2 16.035c0-1.223.462-2.282 1.385-3.176.924-.894 2.018-1.341 3.282-1.341 1.215 0 2.284.4 3.208 1.2l10.938-6.142c-.098-.47-.146-.823-.146-1.058 0-1.224.461-2.283 1.385-3.177C22.976 1.447 24.07 1 25.333 1c1.264 0 2.358.447 3.282 1.341C29.538 3.235 30 4.294 30 5.518c0 1.223-.462 2.282-1.385 3.176-.924.894-2.018 1.341-3.282 1.341-1.166 0-2.236-.423-3.208-1.27l-10.938 6.211c.098.471.146.824.146 1.06 0 .235-.048.587-.146 1.058l11.084 6.212c.875-.753 1.896-1.13 3.062-1.13z'
  })
)()

export const $moreDots = $path(
  attr({
    d: 'M19.333 16c0-.828-.375-1.58-.976-2.121A3.522 3.522 0 0016 13c-.92 0-1.755.338-2.357.879-.601.542-.976 1.293-.976 2.121 0 .828.375 1.58.976 2.121A3.522 3.522 0 0016 19c.92 0 1.755-.337 2.357-.879.601-.541.976-1.293.976-2.121zM31 16c0-.828-.375-1.58-.977-2.121A3.521 3.521 0 0027.667 13c-.92 0-1.755.338-2.357.879-.602.542-.977 1.293-.977 2.121 0 .828.375 1.58.977 2.121a3.522 3.522 0 002.357.879c.92 0 1.755-.337 2.356-.879.602-.541.977-1.293.977-2.121zM7.667 16c0-.828-.375-1.58-.977-2.121A3.522 3.522 0 004.333 13c-.92 0-1.755.338-2.356.879C1.375 14.421 1 15.172 1 16c0 .828.375 1.58.977 2.121A3.522 3.522 0 004.333 19c.92 0 1.755-.337 2.357-.879.602-.541.977-1.293.977-2.121z'
  })
)()


export const $alertIcon = $svg('g')(
  $path(
    attr({
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M1.99 14.391L9.61 22.01a3.382 3.382 0 004.782 0l7.618-7.617a3.382 3.382 0 000-4.783L14.392 1.99a3.382 3.382 0 00-4.783 0L1.99 9.609a3.382 3.382 0 000 4.782zm.91-.217l6.926 6.925c1.2 1.201 3.147 1.201 4.348 0l6.925-6.925c1.201-1.2 1.201-3.147 0-4.348l-6.925-6.925a3.075 3.075 0 00-4.348 0L2.901 9.826a3.075 3.075 0 000 4.348z'
    })
  )(),
  $path(
    attr({

      d: 'M11 16.8c0 .662.447 1.2 1 1.2.552 0 1-.538 1-1.2 0-.662-.448-1.2-1-1.2-.553 0-1 .538-1 1.2zM12 14c.552 0 1-.538 1-1.2V7.2c0-.663-.448-1.2-1-1.2-.553 0-1 .537-1 1.2v5.6c0 .662.447 1.2 1 1.2z'
    })
  )()
)


export const $caretDown = $path(attr({ d: 'M3.92 3.81a.85.85 0 01-.48-.15L.36 1.54A.85.85 0 01.15.36.84.84 0 011.32.15l2.6 1.79L6.52.15a.84.84 0 011.17.21.85.85 0 01-.21 1.18L4.4 3.66a.83.83 0 01-.48.15z' }))()
// export const $caretDown = $svg('path')(attr({ d: 'M4.616.296c.71.32 1.326.844 2.038 1.163L13.48 4.52a6.105 6.105 0 005.005 0l6.825-3.061c.71-.32 1.328-.84 2.038-1.162l.125-.053A3.308 3.308 0 0128.715 0a3.19 3.19 0 012.296.976c.66.652.989 1.427.989 2.333 0 .906-.33 1.681-.986 2.333L18.498 18.344a3.467 3.467 0 01-1.14.765c-.444.188-.891.291-1.345.314a3.456 3.456 0 01-1.31-.177 2.263 2.263 0 01-1.038-.695L.95 5.64A3.22 3.22 0 010 3.309C0 2.403.317 1.628.95.98c.317-.324.68-.568 1.088-.732a3.308 3.308 0 011.24-.244 3.19 3.19 0 011.338.293z' }))()

export const $caretDblDown = $path(attr({ d: 'M15.97 28.996c-.497 0-.983-.176-1.37-.493L1.77 17.793a2.15 2.15 0 01-.275-3.021 2.142 2.142 0 013.017-.276l11.465 9.6 11.464-9.254a2.143 2.143 0 013.011.311l.006.012a2.14 2.14 0 01-.175 3.022l-.124.106-12.83 10.345c-.41.258-.884.387-1.358.358z M15.97 18.996c-.497 0-.983-.176-1.37-.493L1.77 7.793a2.15 2.15 0 01-.275-3.021 2.142 2.142 0 013.017-.276l11.465 9.6L27.44 4.842a2.143 2.143 0 013.011.311l.006.012a2.14 2.14 0 01-.175 3.022l-.124.106-12.83 10.345c-.41.258-.884.387-1.358.358z' }))()

export const $bull = $path(attr({ d: 'M29.832 7.782c-.65-3.088-3.175-4.65-7.724-4.781a.345.345 0 00-.356.27.35.35 0 00.18.404c2.017 1.054 3.06 2.274 3.279 3.844.242 1.787-1.695 2.408-3.576 2.69a2.073 2.073 0 00-1.649-.669 3.943 3.943 0 00-1.65.375 9.498 9.498 0 01-2.326.449h-.02a9.494 9.494 0 01-2.326-.449 3.942 3.942 0 00-1.65-.375 2.074 2.074 0 00-1.65.67c-1.88-.283-3.818-.904-3.575-2.691.22-1.57 1.261-2.79 3.28-3.844a.35.35 0 00.179-.405.344.344 0 00-.356-.27c-4.548.132-7.075 1.694-7.724 4.782-.774 3.677 1.21 5.83 4.29 7.276l-.372.454-.637.707c-.623.681-1.17 1.376-1.19 2.13a1.616 1.616 0 00.403 1.219 1.747 1.747 0 001.32.456c.315-.005.63-.036.94-.092a25.37 25.37 0 002.18-.486c.274.745.799 2.123 1.245 3.06.338.714.598 1.463.776 2.233-.09.546-.314 2.472.748 3.534.834.834 2.48 1.01 3.713 1.01.194 0 .339-.007.41-.01h.01c.07.003.215.01.41.01 1.233 0 2.878-.176 3.712-1.01 1.063-1.062.838-2.988.748-3.534.178-.77.439-1.519.777-2.234.448-.936.971-2.315 1.244-3.059.52.138 1.346.343 2.18.486.31.056.625.087.94.092a1.747 1.747 0 001.32-.456 1.617 1.617 0 00.404-1.22c-.02-.753-.567-1.448-1.19-2.13l-.638-.706-.372-.454c3.083-1.446 5.067-3.599 4.293-7.276zm-16.288 10.61a1.597 1.597 0 01-1.365.78 1.59 1.59 0 01-1.432-2.281 1.58 1.58 0 01.445-.553.59.59 0 01.755.018l1.477 1.271a.618.618 0 01.12.766zm6.28.78a1.598 1.598 0 01-1.366-.78.617.617 0 01.12-.765l1.478-1.271a.591.591 0 01.755-.018 1.58 1.58 0 01.136 2.367 1.591 1.591 0 01-1.123.465v.001z' }))()
export const $bear = $path(attr({ d: 'M16.533 21.364v5.854c-.007-.01-1.07.012-1.067 0v-5.854a.92.92 0 01-.112-.095l-1.534-1.52a.927.927 0 01-.207-1.014.924.924 0 01.853-.577h3.069a.913.913 0 01.852.577.933.933 0 01-.207 1.013l-1.534 1.52a.885.885 0 01-.113.096zm11.303-10.418c.808 2.116 3.348 9.594.468 13.197-2.787 3.487-7.35 4.693-9.3 5.208-3.002.865-3.008.865-6.01 0-1.949-.515-6.513-1.72-9.3-5.208-2.88-3.604-.34-11.08.468-13.197-.782-.612-2.163-1.967-2.163-3.891C1.999 4.55 4.1 2 6.163 2h.082c1.363.047 2.497 1.483 3.097 2.415a3.714 3.714 0 011.953-.657h9.409c.7.03 1.376.258 1.953.657.597-.932 1.734-2.368 3.097-2.415h.081C27.898 2 30 4.55 30 7.055c0 1.923-1.381 3.279-2.164 3.891zM11.181 14.8c.469 0 .925-.157 1.297-.446.371-.288.638-.693.758-1.15a.743.743 0 00-.315-.811l-2.243-1.438a.727.727 0 00-.862.057 2.136 2.136 0 00-.762 1.644c0 .568.225 1.113.624 1.515.398.402.939.629 1.503.63zm9.487 6.157a5.659 5.659 0 00-.651-2.644 5.605 5.605 0 00-1.807-2.025A3.659 3.659 0 0016 15.55a3.659 3.659 0 00-2.211.736 5.605 5.605 0 00-1.807 2.025 5.659 5.659 0 00-.651 2.644c0 2.913 2.011 4.16 3.698 4.692a3.24 3.24 0 001.94 0c1.687-.533 3.699-1.778 3.699-4.692zm2.277-8.301a2.155 2.155 0 00-.762-1.644.729.729 0 00-.863-.057l-2.243 1.438a.737.737 0 00-.315.81c.12.458.387.863.759 1.151.372.29.828.446 1.297.446a2.12 2.12 0 001.503-.628c.4-.403.623-.948.624-1.516z' }))()
export const $skull = $path(attr({ d: 'M16 2C8.267 2 2 7.486 2 14.249a11.719 11.719 0 005.169 9.5 1.72 1.72 0 01.738 1.636l-.516 3.628a.868.868 0 00.86.994H12.5v-3.07a.438.438 0 01.438-.437h.875a.438.438 0 01.438.438V30h3.498v-3.062a.438.438 0 01.438-.438h.875a.438.438 0 01.438.438V30h4.25a.869.869 0 00.858-.994l-.515-3.628a1.713 1.713 0 01.738-1.635A11.719 11.719 0 0030 14.244C30 7.486 23.733 2 16 2zm-5.251 17.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm10.5 0a3.5 3.5 0 110-7 3.5 3.5 0 010 7z' }))()


export const $external = $path(
  attr({ d: 'M17.5 13.1v6.6c0 .304-.122.578-.322.778-.2.2-.474.322-.778.322H4.3c-.304 0-.577-.122-.778-.322-.2-.2-.322-.474-.322-.778V7.6c0-.304.122-.577.322-.778.2-.2.474-.322.778-.322h6.6a1.1 1.1 0 000-2.2H4.3c-.91 0-1.738.37-2.333.967A3.297 3.297 0 001 7.6v12.1c0 .91.37 1.738.967 2.333A3.297 3.297 0 004.3 23h12.1c.91 0 1.738-.37 2.333-.967A3.297 3.297 0 0019.7 19.7v-6.6a1.1 1.1 0 00-2.2 0zm-6.922 1.878L20.8 4.755V8.7a1.1 1.1 0 002.2 0V2.1a1.094 1.094 0 00-.321-.777l-.002-.002A1.095 1.095 0 0021.9 1h-6.6a1.1 1.1 0 000 2.2h3.945L9.022 13.422a1.099 1.099 0 101.556 1.556z' })
)()

export const $ethScan = $path(
  attr({ d: 'M5.572 11.475a.934.934 0 01.937-.933l1.553.005a.934.934 0 01.933.934v5.874c.175-.052.4-.107.646-.165a.778.778 0 00.6-.757V9.146a.935.935 0 01.933-.934h1.556a.934.934 0 01.934.934v6.763s.39-.158.769-.318a.78.78 0 00.475-.717V6.81a.935.935 0 01.934-.934h1.556a.934.934 0 01.934.934v6.64c1.349-.979 2.716-2.155 3.8-3.57a1.568 1.568 0 00.24-1.463A10.982 10.982 0 0012.138 1C6.039.919.998 5.899 1 12.001a10.968 10.968 0 001.46 5.502 1.39 1.39 0 001.326.688c.295-.026.661-.063 1.097-.114a.777.777 0 00.69-.772v-5.83zM5.538 20.896a10.991 10.991 0 0017.433-9.649c-4.017 5.994-11.434 8.795-17.433 9.649z' })
)()

export const $github = $path(
  attr({
    d: 'M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z'
  })
)()
export const $twitter = $path(
  attr({
    d: 'M23 5.129a8.85 8.85 0 01-2.59.714 4.565 4.565 0 001.984-2.514c-.872.52-1.838.9-2.865 1.103A4.498 4.498 0 0016.234 3c-2.492 0-4.511 2.034-4.511 4.543 0 .355.039.701.116 1.034-3.75-.19-7.076-1.999-9.301-4.75a4.57 4.57 0 00-.61 2.284c0 1.575.795 2.968 2.006 3.782a4.493 4.493 0 01-2.045-.567v.056a4.537 4.537 0 003.622 4.457 4.488 4.488 0 01-2.04.078c.575 1.804 2.242 3.12 4.214 3.159A9.01 9.01 0 011 18.958 12.699 12.699 0 007.92 21c8.3 0 12.842-6.927 12.842-12.933 0-.2-.005-.394-.013-.589A9.119 9.119 0 0023 5.128z'
  })
)()

export const $discord = $path(
  attr({
    d: 'M27.605 7.728A12.798 12.798 0 0020.3 5l-.359.418a17.08 17.08 0 016.472 3.291 22.112 22.112 0 00-19.415-.75c-.836.39-1.386.68-1.501.736a17.699 17.699 0 016.806-3.392L12.05 5a12.793 12.793 0 00-7.295 2.728A34.726 34.726 0 001 22.87a9.418 9.418 0 007.925 3.956s.968-1.17 1.748-2.166a8.08 8.08 0 01-4.548-3.06c.376.26 1.01.62 1.055.65a18.93 18.93 0 0016.224.909c1.05-.396 2.053-.91 2.988-1.53a8.29 8.29 0 01-4.705 3.09c.78.981 1.717 2.107 1.717 2.107a9.497 9.497 0 007.94-3.956 34.51 34.51 0 00-3.74-15.142v-.001zm-13.641 9.846a2.754 2.754 0 01-2.643 2.887 2.895 2.895 0 010-5.774h.043a2.739 2.739 0 012.6 2.728v.159zm6.609 2.424a2.661 2.661 0 01.23-5.311 2.755 2.755 0 012.642 2.887 2.647 2.647 0 01-2.872 2.424z'
  })
)()

