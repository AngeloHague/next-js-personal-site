# Problems encountered and their solutions
## Loading markdown on homepage
Based on the Next.js Blog example, I wanted to load Markdown files into my homepage sections, giving me a conventient method to alter their contents when necessary.

However, unlike the old *pages/index.js* architecture, the new *app/page.js* router **did not allow getStaticProps**. Subsequently, I opted to make a react functional component which loaded and displayed the markdown sections instead.