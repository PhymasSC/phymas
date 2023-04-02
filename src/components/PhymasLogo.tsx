type Props = {
  size?: number
  color?: string
}

export const PhymasLogo = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={props.size || 30}
    zoomAndPan='magnify'
    viewBox='0 0 375 374.999991'
    height={props.size || 30}
    preserveAspectRatio='xMidYMid meet'
    version='1.0'
  >
    <defs>
      <clipPath id='013a9c7465'>
        <path
          d='M 37.5 37.5 L 337.5 37.5 L 337.5 337.5 L 37.5 337.5 Z M 37.5 37.5 '
          clip-rule='nonzero'
        />
      </clipPath>
    </defs>
    <g clip-path='url(#013a9c7465)'>
      <path
        fill={props.color || '#000000'}
        d='M 337.46875 187.484375 C 337.46875 270.183594 270.183594 337.46875 187.484375 337.46875 C 184.554688 337.46875 181.636719 337.375 178.742188 337.210938 L 178.742188 323.851562 C 181.636719 324.035156 184.546875 324.140625 187.484375 324.140625 C 262.839844 324.140625 324.140625 262.839844 324.140625 187.484375 C 324.140625 112.132812 262.839844 50.828125 187.484375 50.828125 C 184.546875 50.828125 181.636719 50.957031 178.742188 51.132812 C 107.449219 55.660156 50.828125 115.070312 50.828125 187.476562 C 50.828125 231.039062 71.339844 269.863281 103.179688 294.90625 L 103.179688 187.84375 C 103.179688 163.742188 111.074219 144.132812 127.328125 127.878906 C 143.574219 111.632812 163.1875 103.738281 187.285156 103.738281 C 211.40625 103.738281 231.097656 111.65625 247.492188 127.929688 C 263.84375 144.179688 271.792969 163.773438 271.792969 187.84375 C 271.792969 211.941406 263.828125 231.617188 247.441406 248 C 231.050781 264.386719 211.375 272.351562 187.285156 272.351562 C 183.652344 272.351562 182.65625 271.332031 182.105469 270.765625 C 181.539062 270.183594 180.355469 268.972656 180.355469 265.019531 C 180.355469 261.222656 181.414062 260.167969 181.925781 259.660156 C 182.433594 259.15625 183.496094 258.089844 187.285156 258.089844 C 206.558594 258.089844 223.269531 251.160156 236.9375 237.488281 C 250.601562 223.820312 257.539062 207.109375 257.539062 187.84375 C 257.539062 168.789062 250.378906 151.65625 236.828125 138.285156 C 223.164062 124.820312 206.5 117.996094 187.285156 117.996094 C 168.007812 117.996094 151.375 124.859375 137.835938 138.386719 C 124.300781 151.917969 117.4375 168.558594 117.4375 187.84375 L 117.4375 320.046875 C 112.519531 317.433594 107.753906 314.578125 103.179688 311.453125 C 63.5625 284.4375 37.5 238.949219 37.5 187.484375 C 37.5 107.71875 100.097656 42.324219 178.742188 37.773438 C 181.636719 37.605469 184.546875 37.5 187.484375 37.5 C 270.183594 37.5 337.46875 104.785156 337.46875 187.484375 Z M 337.46875 187.484375 '
        fill-opacity='1'
        fill-rule='nonzero'
      />
    </g>
  </svg>
)
