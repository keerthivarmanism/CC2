package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.MovieRepository;
@Service
public class MovieService {
	@Autowired
	MovieRepository movie;
	public  String deleteDetails(int id)
	{
		movie.deleteById(id);
		return "deleted";
	}

}
