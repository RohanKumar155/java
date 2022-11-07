package com.examplespringcrudmongodb.service;

import com.examplespringcrudmongodb.model.Blog;

import java.util.List;

public interface IBlogService {

    Blog create(Blog blog);

    List<Blog> findByTitle(String title);

    List<Blog> findAll();

    void delete(String id);

    Blog update(Blog blog);

    Blog findById(String id);
}
