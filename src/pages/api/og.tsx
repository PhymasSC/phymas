import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: 'center',
          gap: '30',
        }}
      >
        <svg
          width='200'
          height='200'
          viewBox='0 0 314 314'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_dddddd_3_11)'>
            <path
              d='M306.969 156.984C306.969 239.684 239.684 306.969 156.984 306.969C155.957 306.969 154.931 306.957 153.907 306.935C150.726 306.867 148.242 304.223 148.242 301.041V299.744C148.242 296.281 151.166 293.554 154.629 293.618C155.412 293.633 156.197 293.641 156.984 293.641C232.34 293.641 293.641 232.34 293.641 156.984C293.641 81.6328 232.34 20.3281 156.984 20.3281C154.047 20.3281 151.137 20.457 148.242 20.6328C76.9492 25.1602 20.3281 84.5703 20.3281 156.977C20.3281 196.108 36.879 231.416 63.3243 256.345C66.9684 259.781 72.6797 257.062 72.6797 252.054V157.344C72.6797 133.242 80.5742 113.633 96.8281 97.3789C113.074 81.1328 132.688 73.2383 156.785 73.2383C180.906 73.2383 200.598 81.1562 216.992 97.4297C233.344 113.68 241.293 133.273 241.293 157.344C241.293 181.441 233.328 201.117 216.941 217.5C200.551 233.887 180.875 241.852 156.785 241.852C153.152 241.852 152.156 240.832 151.605 240.266C151.039 239.684 149.855 238.473 149.855 234.52C149.855 230.723 150.914 229.668 151.426 229.16C151.934 228.656 152.996 227.59 156.785 227.59C176.059 227.59 192.77 220.66 206.438 206.988C220.102 193.32 227.039 176.609 227.039 157.344C227.039 138.289 219.879 121.156 206.328 107.785C192.664 94.3203 176 87.4961 156.785 87.4961C137.508 87.4961 120.875 94.3594 107.336 107.887C93.8008 121.418 86.9375 138.059 86.9375 157.344V279.564C86.9375 284.09 82.1277 286.963 78.2763 284.587C76.3816 283.418 74.5152 282.207 72.6797 280.953C33.0625 253.938 7 208.449 7 156.984C7 77.2188 69.5977 11.8242 148.242 7.27344C151.137 7.10547 154.047 7 156.984 7C239.684 7 306.969 74.2852 306.969 156.984Z'
              fill='url(#paint0_linear_3_11)'
            />
            <path
              d='M306.969 156.984C306.969 239.684 239.684 306.969 156.984 306.969C155.957 306.969 154.931 306.957 153.907 306.935C150.726 306.867 148.242 304.223 148.242 301.041V299.744C148.242 296.281 151.166 293.554 154.629 293.618C155.412 293.633 156.197 293.641 156.984 293.641C232.34 293.641 293.641 232.34 293.641 156.984C293.641 81.6328 232.34 20.3281 156.984 20.3281C154.047 20.3281 151.137 20.457 148.242 20.6328C76.9492 25.1602 20.3281 84.5703 20.3281 156.977C20.3281 196.108 36.879 231.416 63.3243 256.345C66.9684 259.781 72.6797 257.062 72.6797 252.054V157.344C72.6797 133.242 80.5742 113.633 96.8281 97.3789C113.074 81.1328 132.688 73.2383 156.785 73.2383C180.906 73.2383 200.598 81.1562 216.992 97.4297C233.344 113.68 241.293 133.273 241.293 157.344C241.293 181.441 233.328 201.117 216.941 217.5C200.551 233.887 180.875 241.852 156.785 241.852C153.152 241.852 152.156 240.832 151.605 240.266C151.039 239.684 149.855 238.473 149.855 234.52C149.855 230.723 150.914 229.668 151.426 229.16C151.934 228.656 152.996 227.59 156.785 227.59C176.059 227.59 192.77 220.66 206.438 206.988C220.102 193.32 227.039 176.609 227.039 157.344C227.039 138.289 219.879 121.156 206.328 107.785C192.664 94.3203 176 87.4961 156.785 87.4961C137.508 87.4961 120.875 94.3594 107.336 107.887C93.8008 121.418 86.9375 138.059 86.9375 157.344V279.564C86.9375 284.09 82.1277 286.963 78.2763 284.587C76.3816 283.418 74.5152 282.207 72.6797 280.953C33.0625 253.938 7 208.449 7 156.984C7 77.2188 69.5977 11.8242 148.242 7.27344C151.137 7.10547 154.047 7 156.984 7C239.684 7 306.969 74.2852 306.969 156.984Z'
              stroke='url(#paint1_linear_3_11)'
              stroke-width='14'
              stroke-linejoin='round'
            />
          </g>
          <defs>
            <filter
              id='filter0_dddddd_3_11'
              x='0'
              y='0'
              width='313.969'
              height='313.969'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_3_11'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
              />
              <feBlend
                mode='normal'
                in2='effect1_dropShadow_3_11'
                result='effect2_dropShadow_3_11'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
              />
              <feBlend
                mode='normal'
                in2='effect2_dropShadow_3_11'
                result='effect3_dropShadow_3_11'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
              />
              <feBlend
                mode='normal'
                in2='effect3_dropShadow_3_11'
                result='effect4_dropShadow_3_11'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
              />
              <feBlend
                mode='normal'
                in2='effect4_dropShadow_3_11'
                result='effect5_dropShadow_3_11'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
              />
              <feBlend
                mode='normal'
                in2='effect5_dropShadow_3_11'
                result='effect6_dropShadow_3_11'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect6_dropShadow_3_11'
                result='shape'
              />
            </filter>
            <linearGradient
              id='paint0_linear_3_11'
              x1='156.984'
              y1='7.5'
              x2='156.984'
              y2='306.969'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#5178DB' />
              <stop offset='1' stop-color='#F8CBCB' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_3_11'
              x1='156.984'
              y1='7'
              x2='156.984'
              y2='306.969'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#5178DB' />
              <stop offset='1' stop-color='#F8CBCB' />
            </linearGradient>
          </defs>
        </svg>

        <div
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Phymas
        </div>
      </div>
    ),

    {
      width: 1200,
      height: 630,
    },
  )
}
