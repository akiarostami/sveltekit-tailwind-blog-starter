---
title: O Canada
date: '2017-07-15'
tags: ['holiday', 'canada', 'images']
draft: false
summary: The scenic lands of Canada featuring maple leaves, snow-capped mountains, turquoise lakes and Toronto. Take in the sights in this photo gallery exhibition and see how easy it is to replicate with some MDX magic and tailwind classes.
---

# O Canada

The scenic lands of Canada featuring maple leaves, snow-capped mountains, turquoise lakes and Toronto. Take in the sights in this photo gallery exhibition and see how easy it is to replicate with some MDX magic and tailwind classes.

Features images served using `next/image` component. The locally stored images are located in a folder with the following path: `/img/canada/[filename].jpg`

Since we are using mdx, we can create a simple responsive flexbox grid to display our images with a few tailwind css classes.

---

# Implementation

```js
<div className="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
	<div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2">
		![Maple](/img/canada/maple.jpg)
	</div>
	<div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2">
		![Lake](/img/canada/lake.jpg)
	</div>
	<div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2">
		![Mountains](/img/canada/mountains.jpg)
	</div>
	<div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2">
		![Toronto](/img/canada/toronto.jpg)
	</div>
</div>
```

With MDX v2, one can interleave markdown in jsx as shown in the example code.
