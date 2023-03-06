package top.naccl.util;

import net.coobird.thumbnailator.Thumbnails;
import top.naccl.constant.ImageTypeRegex;

import java.io.File;
import java.io.IOException;

/**
 * @Author : RippleSu
 * @create 2023/3/1 12:38
 */
public class FileUtil {
    public static String slash = System.getProperty("os.name").startsWith("Windows") ? "\\" : "/";
    public static boolean isDirectoryEmpty(File directory) {
        String[] files = directory.list();
        if(files == null){
            return true;
        }
        return files.length == 0;
    }

    /**
     * 如果dir后忘了加对应操作系统的斜杠，则补上
     * @param dir
     * @return
     */
    public static String checkSlash(String dir){
        if(dir.endsWith("/") || dir.endsWith("\\")){
            return dir;
        }else {
            return (dir + slash);
        }
    }

    /**
     * 图片压缩
     * @param path
     * @param dir
     * @param scale
     * @param quality
     */
    public static void imageCompress(String path, String dir, float scale, float quality) {
        path = checkSlash(path);
        String suffix = dir + "-compress";
        String sourcePath = path + dir + '\\';
        String targetPath = path + suffix + '\\';
        File file = new File(path + dir);
        String[] list = file.list((f, name) -> name.toLowerCase().matches(ImageTypeRegex.ALL));
        if(list == null || list.length == 0){
            return;
        }
        File comFile = new File(path + suffix);
        if (!comFile.exists()) {
            comFile.mkdir();
        }
        for (String str : list) {
            try {
                Thumbnails.of(sourcePath + str).scale(scale).outputQuality(quality)
                        .toFile(targetPath + str);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
