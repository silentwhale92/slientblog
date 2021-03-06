package com.ling.pojo;

import org.springframework.cache.annotation.Cacheable;

import java.io.Serializable;

/**
 * @author:slientwhale
 * @date:
 * @description:
 * @modify:
 */
public class User implements Serializable {
    private Integer user_id;
    private String user_name;
    private String user_pwd;
    private String user_email;
    private String user_status;

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_pwd() {
        return user_pwd;
    }

    public void setUser_pwd(String user_pwd) {
        this.user_pwd = user_pwd;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_status() {
        return user_status;
    }

    public void setUser_status(String user_status) {
        this.user_status = user_status;
    }
}
