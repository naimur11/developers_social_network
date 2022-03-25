const express = require('express');
const router= express.Router();

//@route   api/profile
//@desc    test route
//@access  public
router.get('/', (request, response) => {
return response.send('test profile route');
})

module.exports = router;