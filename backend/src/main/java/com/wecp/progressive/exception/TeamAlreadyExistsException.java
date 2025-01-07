package com.wecp.progressive.exception;

import java.sql.SQLException;

public class TeamAlreadyExistsException extends SQLException {
    public TeamAlreadyExistsException(String m){
        super(m);
    }
}