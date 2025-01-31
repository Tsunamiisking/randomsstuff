var TimeLimitedCache = function() {
    this.cache = {food: "book", car: "fool"}
    this.valCount = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    for (key in this.cache) {
        this.valCount++
    }
    console.log(this.valCount)
};

const timefunc = new TimeLimitedCache()
timefunc.count()
