import db from '../database/models';

const { User, Auth, SocialLink } = db;
export default class UserServices {
  static async getUser(username) {
    try {
      return User.findOne({
        where: { username },
      });
    } catch (error) {
      throw error;
    }
  }

  static async upsertUser(username, user) {
    try {
      return User
        .findOne({ where: { username } })
        .then((obj) => {
          if (obj) return obj.update(user);
          return User.create(user);
        });
    } catch (error) {
      throw error;
    }
  }

  static async updatePassword(username, password) {
    try {
      return Auth.update({ password }, { where: { username }, returning: true });
    } catch (error) {
      throw error;
    }
  }

  static async upsertSocialLinks(user, socialLink) {
    try {
      const { type, link } = socialLink;
      return SocialLink
        .findOne({ where: { user, type } })
        .then((obj) => {
          if (obj) return obj.update({ link });
          return SocialLink.create({ user, ...socialLink });
        });
    } catch (error) {
      throw error;
    }
  }

  static async getSocialLinks(user) {
    try {
      return SocialLink.findAll({
        where: { user },
        attributes: ['type', 'link'],
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteSocialLink(user, type) {
    try {
      return SocialLink.destroy({ where: { user, type } });
    } catch (error) {
      throw error;
    }
  }
}
