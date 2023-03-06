package top.naccl.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import top.naccl.constant.ImageRandomMethod;
import top.naccl.constant.ImageTypeRegex;
import top.naccl.service.RandomImageService;
import top.naccl.util.FileUtil;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;

/**
 * @Author : RippleSu
 * @create 2023/2/27 22:42
 */
@Service
public class RandomImageServiceImpl implements RandomImageService {

    private final SecureRandom random = new SecureRandom();
    private String imageDir;
    @Value("${images.default}")
    private String defaultImage;

    @Value("${images.dir}")
    public void initPath(String dir){
        this.imageDir = FileUtil.checkSlash(dir);
    }

    @Override
    public byte[] randomImageHandler(String dir, String method) throws IOException {
        // 去除末尾的斜杠
        if(dir.endsWith("/") || dir.endsWith("\\")){
            dir = dir.substring(0, dir.length() - 1);
        }
        // 如果是windows系统则需要将路径中的反斜杠转为斜杠
        if(System.getProperty("os.name").startsWith("Windows")){
            // replaceAll()方法实际是采用正则表达式的规则去匹配的。
            // 在regex中“\\”表示一个“\”，正则转义一次，在java中一个“\”也要用"\\"表示，即字符串转义一次，所以写成“\\\\”。
            dir = dir.replaceAll("/", "\\\\");
        }
        // 获取指定的目录
        File file = new File(imageDir + dir);
        if(file.isDirectory()){
            if(method.equals(ImageRandomMethod.FORCE)){
                return randomImageOfAll(file);
            } else if(method.equals(ImageRandomMethod.ROOT_ONLY)){
                return randomImageRootOnly(file);
            } else {
                // ImageRandomMethod.SIMPLE
                return randomImageSimple(file);
            }
        }
        // 如果file为图片且存在，则将其返回
        else if(file.getName().toLowerCase().matches(ImageTypeRegex.ALL)){
            if(file.exists()) {
                return Files.readAllBytes(file.toPath());
            }
        }
        // 如果imageDir指定的目录或图片不存在，则返回默认图片
        return getDefaultImage();
    }

    /**
     * 先随机选择一个目录（包含目录dir），然后在该目录下的所有图片中随机抽取一张
     * 因此如果随机到的目录为空，则返回默认图片
     * @param dir
     * @throws IOException
     */
    @Override
    public byte[] randomImageSimple(File dir) throws IOException {
        // 最终要获取的图片所在目录
        File target;
        // 得到当前目录下所有非空子目录
        File[] fileList = dir.listFiles((file) -> !FileUtil.isDirectoryEmpty(file));
        // 如果当前目录没有子目录或生成的随机数为fileList.length，则从当前目录取图片
        // 否则从fileList[随机数]取图片
        if(fileList == null || fileList.length == 0){
            target = dir;
        } else {
            // 访问目录的下标，范围是(0, fileList.length]
            int dirIndex = random.nextInt(fileList.length);
            // 如果当前目录下不包含图片，则从第一个非空子目录中取图片
            // 否则直接从当前目录取一张图片
            if(dirIndex == fileList.length){
                String[] list = dir.list((file, name) -> name.toLowerCase().matches(ImageTypeRegex.ALL));
                if(list == null || list.length == 0){
                    target = new File(fileList[0].getAbsolutePath());
                } else {
                    return Files.readAllBytes(new File(dir.getAbsolutePath() + FileUtil.slash
                            + list[random.nextInt(list.length)]).toPath());
                }
            } else {
                target = new File(fileList[dirIndex].getAbsolutePath());
            }
        }
        // 从目标目录取出所有图片
        String[] images = target.list((file, name) -> name.toLowerCase().matches(ImageTypeRegex.ALL));
        // 该目录下没有图片，则返回一张默认图片
        if(images == null || images.length == 0){
            return getDefaultImage();
        }
        // 目录下有图片，则随机选择一张
        return Files.readAllBytes(new File(target.getAbsolutePath() + FileUtil.slash
                                            + images[random.nextInt(images.length)]).toPath());
    }

    /**
     * 遍历目录下所有图片（包含子目录），并从中随机抽取一张。速度较慢。
     * @param dir
     * @throws IOException
     */
    @Override
    public byte[] randomImageOfAll(File dir) throws IOException {
        // 目录下所有图片的绝对路径
        List<String> imagePaths = new ArrayList<>();
        Deque<File> dirs = new LinkedList<>();
        dirs.push(dir);
        // 遍历获取目录下所有图片
        while (!dirs.isEmpty()){
            File peek = dirs.pop();
            File[] files = peek.listFiles();
            if(files == null){
                return getDefaultImage();
            }
            for(File f : files){
                if(f.getName().toLowerCase().matches(ImageTypeRegex.ALL)){
                    imagePaths.add(f.getAbsolutePath());
                } else if(f.isDirectory()){
                    dirs.push(f);
                }
            }
        }
        if(imagePaths.isEmpty()){
            return getDefaultImage();
        }
        return Files.readAllBytes(new File(imagePaths.get(random.nextInt(imagePaths.size()))).toPath());
    }

    /**
     *  遍历目录中所有图片（不包含子目录），并从中随机抽取一张。
     *  目录下没有图片，则返回默认图片
     * @param dir
     * @throws IOException
     */
    @Override
    public byte[] randomImageRootOnly(File dir) throws IOException {
        File[] images = dir.listFiles((name) ->
                name.getName().toLowerCase().matches(ImageTypeRegex.ALL));
        if(images == null || images.length == 0){
            return getDefaultImage();
        }
        return Files.readAllBytes(images[random.nextInt(images.length)].toPath());
    }

    @Override
    public byte[] getDefaultImage() throws IOException {
        return Files.readAllBytes(new File(defaultImage).toPath());
    }
}
