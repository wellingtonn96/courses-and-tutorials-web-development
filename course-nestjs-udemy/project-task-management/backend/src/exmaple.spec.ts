class FriendList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    global.console.log(`${name} is naw a friend!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friend not found!');
    }

    this.friends.splice(idx, 1);
  }
}

describe('FriendList', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendList();
  });

  it('inilializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friend to the list', () => {
    friendsList.addFriend('Wellington');

    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn();

    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('Wellington');
    expect(friendsList.announceFriendship).toHaveBeenCalledWith('Wellington');
  });

  describe('removeFriend', () => {
    it('remove a friend from the list', () => {
      friendsList.addFriend('Wellington');
      expect(friendsList.friends[0]).toEqual('Wellington');
      friendsList.removeFriend('Wellington');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('thows an error as friend does not exists', () => {
      expect(() => friendsList.removeFriend('Wellington')).toThrow(
        new Error('Friend not found!'),
      );
    });
  });
});
