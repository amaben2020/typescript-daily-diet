// array: is it ordered correctly?

// halve the array

const bs_list = (haystack: number[], needle: number): boolean => {
  let lo = 0;
  let hi = haystack.length;
  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const value = haystack[m];
    if (value === needle) {
      return true;
    } else if (value > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);
  return false;
}

// console.log(bs_list([2, 3, 4, 5, 6, 7, 8, 9], 9))

const getName = <T>(name: T): T => name

console.log(getName<string>('Name'))

const images = [
  {
    node: {
      originalSrc: 'Men-Jacket-Front-Black__15466.1603283963.png',
      altText: '',
      width: 2048,
      height: 2048
    }
  },
  {
    node: {
      originalSrc: 'Men-Jacket-Side-Black__68202.1603283961.png',
      altText: '',
      width: 2048,
      height: 2048
    }
  },
  {
    node: {
      originalSrc: 'Men-Jacket-Back-Black__33864.1603283963.png',
      altText: '',
      width: 2048,
      height: 2048
    }
  },
  {
    node: {
      originalSrc: 'Men-Jacket-Front-White__95300.1603283963.png',
      altText: '',
      width: 2048,
      height: 2048
    }
  },
  {
    node: {
      originalSrc: 'Men-Jacket-Side-White__91924.1603283962.png',
      altText: '',
      width: 2048,
      height: 2048
    }
  },
  {
    node: {
      originalSrc: 'Men-Jacket-Back-White__02866.1603283963.png',
      altText: '',
      width: 2048,
      height: 2048
    }
  }
]

const normalizedImages = (edges: any) => {

  return edges.map(({ node }: any) => {

    return {

      url: `/${node.originalSrc}`,
      ...node
    }
  })
}

console.log(normalizedImages(images))