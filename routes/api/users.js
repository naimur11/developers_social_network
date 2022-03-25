const express = require('express');
const router= express.Router();

//@route   api/users
//@desc    test route
//@access  public
router.get('/', (request, response) => {
return response.send('test user route');
})

module.exports = router;