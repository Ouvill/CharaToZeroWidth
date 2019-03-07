var assert = require('assert');
var ctzw = require('../index.js')
describe('Chara to Zero Width', function () {
    describe('encode()', function () {
        it('should encode', function () {
            assert.equal(ctzw.encode('text'), '‌﻿​﻿​﻿​﻿‌﻿​﻿‌﻿‌﻿‍﻿‌﻿​﻿​﻿‌﻿‌﻿​﻿‌﻿​﻿‍﻿‌﻿​﻿​﻿​﻿​﻿‌﻿‌﻿‌﻿‍﻿‌﻿​﻿​﻿​﻿‌﻿​﻿‌﻿‌');
        });
    });

    describe('decode()', function () {
        it('should decode', function () {
            assert.equal(ctzw.decode('‌﻿​﻿​﻿​﻿‌﻿​﻿‌﻿‌﻿‍﻿‌﻿​﻿​﻿‌﻿‌﻿​﻿‌﻿​﻿‍﻿‌﻿​﻿​﻿​﻿​﻿‌﻿‌﻿‌﻿‍﻿‌﻿​﻿​﻿​﻿‌﻿​﻿‌﻿‌'), 'text');
        });
    });
});
