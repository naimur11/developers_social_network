const express = require('express');
const router= express.Router();

//@route   api/post
//@desc    test route
//@access  public
router.get('/', (request, response) => {
return response.send('test post route');
})

module.exports = router;