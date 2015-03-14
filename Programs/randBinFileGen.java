/* randBinFileGen.java
 * Author: Artur Filipowicz
 * Date: 2/28/2015
 * Version: 1.0
 * 
 * Compilation: javac randBinFileGen.java
 * Execution: java randBinFileGen 100 > randFile
 * Description: A class for generating pseudorandom binary files.
 *
 * License: The MIT License (MIT) Copyright (c) 2015
 **********************************************************************/
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;
import java.util.Random;

public class randBinFileGen {
    /* Generate numBytes of pseudorandom bytes and write them to standard
    output. */
    public static void main(String[] args) throws IOException {   
        int numBytes = Integer.parseInt(args[0]);

        BufferedOutputStream out = new BufferedOutputStream(System.out);
        Random rand = new Random();
        int randNum;

        for (; numBytes > 0; numBytes--)
        {
            randNum = rand.nextInt(256);
            out.write((byte)randNum);
            out.flush();
        }
    }
}