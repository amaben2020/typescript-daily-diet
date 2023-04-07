// Resources: i https://www.oreilly.com/library/view/javascript-the-definitive/0596101996/re106.html#:~:text=ceil(%20)%20differs%20from%20Math.,rounds%20them%20up%20toward%20zero.

// Guide: https://gist.github.com/proudlygeek/db851215b8f10b154f4d

// Slice vs Splice: https://blog.knoldus.com/slice-v-s-splice-in-javascript/#:~:text=Slice%20is%20used%20to%20get,reflected%20in%20the%20original%20array.

class PaginationHelper {
  collection;
  itemsPerPage;
  constructor(collection: any[], itemsPerPage: number) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount(): number {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount(): number {
    // returns the number of pages
    const totalNumberOfElems = this.collection.length;

    const itemsPerPage = this.itemsPerPage;

    const result = Math.ceil(totalNumberOfElems / itemsPerPage);

    return result;
  }
  pageItemCount(pageIndex: number): number {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range

    const numberOfItemsPerPage = this.pageCount();

    const index = pageIndex - 1;
    const end = pageIndex * numberOfItemsPerPage;

    console.log("end", end);
    // if pageIdx is greater than the number of numberOfItemsPerPage or lower, return
    // if (pageIndex >= numberOfItemsPerPage || pageIndex < 0) return -1;

    console.log("index", index);
    return this.collection.slice(Number(index * numberOfItemsPerPage), end)
      .length;
  }
  pageIndex(itemIndex: number) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
  }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e"], 2);

console.log("item count", helper.pageItemCount(3));
