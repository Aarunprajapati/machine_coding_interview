class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    console.log("this is the key", key)
    return value
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    console.log("this is new key ", this.cache);
    this.cache.set(key, value);

    if (this.cache.size > this.limit) {
      const firstKey = this.cache.keys().next().value;
      console.log("limit exceed of cache and first key", firstKey);
      this.cache.delete(firstKey);
    }
    console.log(this.cache);
  }
}

const lru = new LRUCache(2);

lru.put(2, "A");
lru.put(3, "C");
lru.get(2)
lru.put(4, "D");

