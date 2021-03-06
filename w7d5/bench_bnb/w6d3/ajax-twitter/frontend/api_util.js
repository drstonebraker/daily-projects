const APIUtil = {
  followUser: id => (
    $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'JSON'
    })
  ),

  unfollowUser: id => (
    $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'JSON'
    })
  ),

  searchUsers: (queryVal, success) => (
    $.ajax({
      url: `/users/search`,
      method: 'GET',
      dataType: 'json',
      data: {
        query: queryVal
      },
      success
    })
  ),

  createTweet: (data) => (
    $.ajax({
      url: `/tweets`,
      method: 'POST',
      dataType: 'json',
      data
    })
  ),


};

module.exports = APIUtil;
