/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack(config, { isServer }) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: {
            and: [
              // Only apply SVGR to SVG imports inside JS or TS files
              /\.(js|mjs|tsx|ts)$/
            ]
          },
          use: {
            loader: '@svgr/webpack',
            options: {
              // Optional: Add options to customize SVGR behavior, like
              // titleProp: true, // Add a title prop to the component
              // svgoConfig: { // Pass options to SVGO for optimization
              //   plugins: [{ removeViewBox: false }]
              // }
            }
          }
        });
    
        return config;
      }

};

export default nextConfig;
